import { Product, ProductVariant } from "./products";

const SHOPIFY_DOMAIN = "anchr-gear-official.myshopify.com";
const STOREFRONT_ACCESS_TOKEN = "cb2fece9c2635bf2f69244170bdad839";

const GRAPHQL_URL = `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`;

async function shopifyFetch<T>(query: string, variables = {}): Promise<T> {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.statusText}`);
  }

  const json = await response.json();
  if (json.errors) {
    throw new Error(`Shopify GraphQL error: ${json.errors[0].message}`);
  }

  return json.data;
}

export async function getProducts(): Promise<Product[]> {
  const query = `
    {
      products(first: 20) {
        edges {
          node {
            id
            title
            description
            productType
            handle
            variants(first: 50) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  compareAtPrice {
                    amount
                    currencyCode
                  }
                  image {
                    url
                    altText
                  }
                  availableForSale
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{ products: { edges: { node: any }[] } }>(query);
  
  return data.products.edges.map(({ node }) => {
    // Map Shopify product to our internal Product structure
    const variants: ProductVariant[] = node.variants.edges.map(({ node: v }: any) => ({
      id: v.id,
      name: v.title,
      // Attempt to map color from options or title, default to black if not found
      color: mapColor(v.title), 
      price: parseFloat(v.price.amount) || getLocalPriceFallback(node.title),
      originalPrice: v.compareAtPrice ? parseFloat(v.compareAtPrice.amount) : undefined,
      image: v.image?.url || node.images.edges[0]?.node.url || getLocalImageFallback(node.title),
      inStock: v.availableForSale,
      // Extract size if present in options
      size: v.selectedOptions.find((o: any) => o.name.toLowerCase() === "size")?.value
    }));

    return {
      id: node.id, // Use GraphQL ID
      handle: node.handle, // Keep handle for links
      name: node.title,
      type: mapType(node.productType),
      description: node.description,
      basePrice: variants[0]?.price || 0,
      originalPrice: variants[0]?.originalPrice,
      variants: variants,
      features: [] // Shopify doesn't have a standard features field, would need metafields
    };
  });
}

export async function createCheckout(lineItems: { variantId: string, quantity: number }[]) {
  const query = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const variables = {
    input: {
      lines: lineItems.map(item => ({
        merchandiseId: item.variantId,
        quantity: item.quantity
      }))
    }
  };

  const data = await shopifyFetch<{ cartCreate: { cart: { checkoutUrl: string }, userErrors: any[] } }>(query, variables);
  
  if (data.cartCreate.userErrors.length > 0) {
    console.error("Shopify Cart Error:", JSON.stringify(data.cartCreate.userErrors, null, 2));
    throw new Error(data.cartCreate.userErrors[0].message);
  }

  // Force the checkout URL to use the myshopify.com domain to avoid DNS/404 issues with the custom domain
  const checkoutUrl = data.cartCreate.cart.checkoutUrl;
  if (checkoutUrl.includes('anchrgear.com')) {
    return checkoutUrl.replace('anchrgear.com', 'anchr-gear-official.myshopify.com');
  }
  return checkoutUrl;
}

// Helper to map Shopify product types to our internal types
function mapType(shopifyType: string): "rope" | "glove" | "digital" {
  const lower = shopifyType.toLowerCase();
  if (lower.includes("glove")) return "glove";
  if (lower.includes("digital") || lower.includes("program") || lower.includes("plan")) return "digital";
  return "rope"; // Default to rope if unknown
}

// Helper to map variant titles to Tailwind colors
function mapColor(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes("pink")) return "bg-pink-500";
  if (lower.includes("grey") || lower.includes("gray")) return "bg-gray-500";
  if (lower.includes("blue") || lower.includes("cyan")) return "bg-cyan-500";
  if (lower.includes("white")) return "bg-white";
  return "bg-black"; // Default
}

// Helper to provide local fallback images for digital products if Shopify image is missing
function getLocalImageFallback(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes("strength")) return "/images/strength_program_cover_v2_2.jpg";
  if (lower.includes("meal")) return "/images/meal_plan_cover_1.jpg";
  return "";
}

// Helper to provide local fallback prices for digital products if Shopify price is missing or zero
function getLocalPriceFallback(title: string): number {
  const lower = title.toLowerCase();
  if (lower.includes("strength")) return 29.99;
  if (lower.includes("meal")) return 19.99;
  return 0;
}
