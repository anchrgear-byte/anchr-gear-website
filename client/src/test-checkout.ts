
import { createCheckout, getProducts } from "./lib/shopify";

async function testCheckout() {
  try {
    console.log("Fetching products...");
    const products = await getProducts();
    
    if (products.length === 0) {
      console.error("No products found!");
      return;
    }

    const firstVariant = products[0].variants[0];
    console.log("Attempting checkout with variant:", firstVariant.id);

    const checkoutUrl = await createCheckout([{ variantId: firstVariant.id, quantity: 1 }]);
    console.log("Checkout successful! URL:", checkoutUrl);
  } catch (error) {
    console.error("Checkout failed:", error);
  }
}

testCheckout();
