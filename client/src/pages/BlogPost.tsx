import { Link, useRoute } from "wouter";
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

// Blog posts data
const BLOG_POSTS = {
  "how-i-lost-160-pounds": {
    title: "How I Lost 160 Pounds: The Truth About Weight Loss Surgery",
    date: "Jan 19, 2026",
    author: "Reggie",
    category: "Transformation",
    image: "/images/hero-bg-final-user.png",
    content: `
      <p>I'm going to tell you something I've never said publicly before.</p>

      <p>Yes, I lost 160 pounds. You've seen the pictures. But there's a part of the story I've always left out, because I was afraid of being judged. I was afraid you'd think I cheated.</p>

      <p><strong>I had weight loss surgery.</strong></p>

      <p>There, I said it. It feels both terrifying and liberating to finally put that out there. For years, I've let people believe I did it all through diet and exercise alone. And while that's a huge part of the story, it's not the whole story.</p>

      <p>I want to be honest with you, because if you're struggling with your weight, you deserve the truth. And the truth is, surgery is not the easy way out. In fact, in some ways, it's harder.</p>

      <h2>Why I Chose Surgery</h2>

      <p>I didn't wake up one day and decide to have surgery. I spent 20+ years as a 911 dispatcher, a high-stress job that took a toll on my body and my mind. I was burned out, I was overweight, and I felt like life was slipping away from me.</p>

      <p>I tried everything. Every diet, every workout plan, every "magic pill." Nothing worked. I'd lose 20 pounds, and then gain back 30. It was a vicious cycle of hope and despair.</p>

      <p>Surgery felt like my last resort. It felt like my only chance to get my life back. I was scared, but I was more scared of what would happen if I didn't do it.</p>

      <h2>The Complication That Almost Killed Me</h2>

      <p>I wish I could tell you that the surgery was a magic wand that instantly solved all my problems. But it wasn't.</p>

      <p>The recovery was brutal. And then, the unthinkable happened: <strong>I developed a major blood clot.</strong> It was a terrifying, life-threatening complication that nobody warns you about. I was lucky to survive.</p>

      <p>That's when I realized that surgery wasn't the finish line. It was the starting line. It was a tool, a powerful tool, but it was just one piece of the puzzle. It forced me to change my relationship with food, but it didn't change my mindset. I still had to do the work.</p>

      <h2>The Daily Grind: Why Surgery Isn't a Quick Fix</h2>

      <p>Here's the part that nobody tells you about weight loss surgery: <strong>you can gain it all back.</strong> I've seen it happen to so many people. They think the surgery will do all the work for them, so they fall back into their old habits.</p>

      <p>But it doesn't work that way. I still have to make a conscious choice every single day to:</p>

      <ul>
        <li><strong>Follow my surgery rules:</strong> I have to eat small portions, prioritize protein, and avoid certain foods. If I don't, I get sick.</li>
        <li><strong>Move my body:</strong> I have to exercise regularly, even when I don't feel like it. That's why I created ANCHR Gear - to make fitness more accessible and convenient.</li>
        <li><strong>Fight temptation:</strong> My new job has a little convenience store with snacks and junk food. It's a constant battle to walk past it and not give in. It's expensive, it's unhealthy, and it's a daily test of my discipline.</li>
        <li><strong>Manage my mindset:</strong> The mental game is the hardest part. I have to constantly work on my self-talk, my habits, and my emotional triggers.</li>
      </ul>

      <p>Losing weight is not a one-time event. It's a lifelong journey. And whether you do it with surgery or without, it requires a level of discipline and commitment that most people will never understand.</p>

      <h2>My Mission</h2>

      <p>I'm sharing this with you because I want you to know that you're not alone. I know what it's like to feel hopeless, to feel like you've tried everything and nothing has worked.</p>

      <p>But I also know what it's like to take back control of your life.</p>

      <p>My mission with ANCHR Gear is to give you the tools and the support you need to do just that. Whether it's our portable fitness equipment that you can use anywhere, or our no-BS nutrition guide that cuts through all the noise, we're here to help you on your journey.</p>

      <p>Because at the end of the day, it's not about the surgery. It's about the strength you build, the discipline you forge, and the life you reclaim.</p>

      <p><strong>Ready to start your journey?</strong></p>

      <ul>
        <li><strong><a href="/shop">Shop our portable fitness equipment</a></strong></li>
        <li><strong><a href="/shop">Get our Fuel The Grind Meal Plan</a></strong></li>
      </ul>
    `
  },
  "battle-rope-workouts": {
    title: "5 At-Home Workouts With Battle Ropes That Actually Work",
    date: "Jan 18, 2026",
    author: "Reggie",
    category: "Workouts",
    image: "/images/pink-ropes.jpeg",
    content: `
      <p>So you bought a pair of battle ropes. Good. You made a smart investment in your health. But now what? Are they just going to sit in the corner of your living room collecting dust?</p>

      <p>Hell no.</p>

      <p>I get it - you're busy. You don't have an hour to spend at the gym every day. That's why I put together these 5 high-intensity, at-home battle rope workouts that you can do in under 20 minutes. No excuses.</p>

      <h2>The 20-Minute ANCHR Burn</h2>

      <p>This is your go-to workout when you're short on time but need to get a good sweat in. It's a full-body blast that will leave you feeling energized and accomplished.</p>

      <p><strong>Instructions:</strong> Perform each exercise for 30 seconds, followed by 30 seconds of rest. Complete 3 rounds.</p>

      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Duration</th>
            <th>Rest</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1. Alternating Waves</td><td>30 sec</td><td>30 sec</td></tr>
          <tr><td>2. Double Waves</td><td>30 sec</td><td>30 sec</td></tr>
          <tr><td>3. Lateral Whips</td><td>30 sec</td><td>30 sec</td></tr>
          <tr><td>4. Jumping Slams</td><td>30 sec</td><td>30 sec</td></tr>
          <tr><td>5. Russian Twists</td><td>30 sec</td><td>30 sec</td></tr>
        </tbody>
      </table>

      <p><strong>Why it works:</strong> This workout combines power, cardio, and core work into one efficient session. The alternating waves build shoulder and arm endurance, the double waves develop explosive power, the lateral whips and Russian twists shred your core, and the jumping slams get your heart rate soaring.</p>

      <h2>The Upper Body Shredder</h2>

      <p>Want to build strong, toned arms and a powerful back? This workout is for you. It focuses on upper body strength and endurance, using the battle ropes to create constant tension on your muscles.</p>

      <p><strong>Instructions:</strong> Perform each exercise for 40 seconds, followed by 20 seconds of rest. Complete 4 rounds.</p>

      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Duration</th>
            <th>Rest</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1. Seated Alternating Waves</td><td>40 sec</td><td>20 sec</td></tr>
          <tr><td>2. In-and-Out Waves</td><td>40 sec</td><td>20 sec</td></tr>
          <tr><td>3. Single Arm Planks with Waves</td><td>40 sec</td><td>20 sec</td></tr>
          <tr><td>4. Bicep Curls</td><td>40 sec</td><td>20 sec</td></tr>
        </tbody>
      </table>

      <p><strong>Why it works:</strong> By performing these exercises from a seated or plank position, you isolate your upper body and force your muscles to work harder. The in-and-out waves target your chest and back, while the single-arm planks with waves build insane core stability and shoulder strength.</p>

      <h2>The Leg Day Finisher</h2>

      <p>Don't skip leg day. This workout is designed to be a brutal finisher after your main leg workout, or a quick standalone session when you're short on time.</p>

      <p><strong>Instructions:</strong> Perform each exercise for 45 seconds, followed by 15 seconds of rest. Complete 3 rounds.</p>

      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Duration</th>
            <th>Rest</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1. Squat with Double Waves</td><td>45 sec</td><td>15 sec</td></tr>
          <tr><td>2. Lunge with Alternating Waves</td><td>45 sec</td><td>15 sec</td></tr>
          <tr><td>3. Lateral Squat with Side Slams</td><td>45 sec</td><td>15 sec</td></tr>
          <tr><td>4. Burpee with Power Slams</td><td>45 sec</td><td>15 sec</td></tr>
        </tbody>
      </table>

      <p><strong>Why it works:</strong> This workout combines traditional leg exercises (squats, lunges) with the explosive power of battle ropes. The added resistance from the ropes forces your legs to work harder, building strength and endurance while also getting your heart rate up.</p>

      <h2>The Core Crusher</h2>

      <p>Your core is the foundation of all your movements. A strong core will help you lift heavier, run faster, and prevent injuries. This workout is designed to build a rock-solid core.</p>

      <p><strong>Instructions:</strong> Perform each exercise for 50 seconds, followed by 10 seconds of rest. Complete 3 rounds.</p>

      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Duration</th>
            <th>Rest</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1. Plank with Alternating Waves</td><td>50 sec</td><td>10 sec</td></tr>
          <tr><td>2. Side Plank with Rope Slams</td><td>50 sec</td><td>10 sec</td></tr>
          <tr><td>3. V-Ups with Rope Toss</td><td>50 sec</td><td>10 sec</td></tr>
          <tr><td>4. Figure 8 Slams</td><td>50 sec</td><td>10 sec</td></tr>
        </tbody>
      </table>

      <p><strong>Why it works:</strong> These exercises target your entire core - rectus abdominis, obliques, and transverse abdominis. The instability created by the ropes forces your core to work overtime to keep you stable.</p>

      <h2>The Cardio Killer</h2>

      <p>Ready to sweat? This workout is all about getting your heart rate up and burning as many calories as possible in a short amount of time.</p>

      <p><strong>Instructions:</strong> Perform each exercise for 20 seconds, followed by 10 seconds of rest (Tabata style). Complete 8 rounds.</p>

      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Duration</th>
            <th>Rest</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1. High Knees with Alternating Waves</td><td>20 sec</td><td>10 sec</td></tr>
          <tr><td>2. Jumping Jacks with Rope Slams</td><td>20 sec</td><td>10 sec</td></tr>
          <tr><td>3. Mountain Climbers with Waves</td><td>20 sec</td><td>10 sec</td></tr>
          <tr><td>4. Skater Jumps with Side Whips</td><td>20 sec</td><td>10 sec</td></tr>
        </tbody>
      </table>

      <p><strong>Why it works:</strong> This high-intensity interval training (HIIT) workout is the most effective way to burn fat and improve your cardiovascular fitness. The short bursts of intense work followed by brief rest periods will keep your metabolism elevated for hours after you're done.</p>

      <h2>Ready to Get Started?</h2>

      <p>You have the workouts. You have the tools. Now all you need to do is put in the work. I know from my own 160-pound weight loss journey that consistency is everything, and these workouts are designed to be effective and efficient, so you can stick with them no matter how busy you are.</p>

      <p>If you don't have a pair of high-quality, portable battle ropes yet, what are you waiting for? Our <strong><a href="/shop">ANCHR Gear Wireless Battle Ropes</a></strong> are designed for at-home workouts just like these. No anchor point needed, no wasted space, no excuses.</p>

      <p><strong><a href="/shop">Shop our Wireless Battle Ropes and start your transformation today.</a></strong></p>
    `
  },
  "meal-prep-guide": {
    title: "The Ultimate Guide to Meal Prepping for Weight Loss",
    date: "Jan 17, 2026",
    author: "Reggie",
    category: "Nutrition",
    image: "/images/meal_plan_cover_1.jpg",
    content: `
      <p>Let me guess: you know you *should* meal prep, but you just... don't.</p>

      <p>Maybe you think it's too complicated. Maybe you think it takes too much time. Or maybe you just hate cooking.</p>

      <p>I get it. I used to be the same way. The thought of spending my entire Sunday in the kitchen, cooking a week's worth of bland chicken and broccoli, made me want to order a pizza out of pure spite.</p>

      <p>But the truth is, meal prep is the single most effective strategy for staying on track with your nutrition and reaching your weight loss goals. I know this from my own 160-pound weight loss journey - even with the help of weight loss surgery, if I don't stay consistent with my eating, the weight comes back. And it doesn't have to be complicated or time-consuming.</p>

      <p>This is the ultimate guide to meal prepping for weight loss, even if you hate cooking.</p>

      <h2>The "Mix & Match Matrix": Your Secret Weapon</h2>

      <p>The biggest mistake people make with meal prep is thinking they have to cook 21 different, elaborate meals for the week. That's a recipe for burnout.</p>

      <p>The key to sustainable meal prep is to keep it simple. I call it the "Mix & Match Matrix."</p>

      <p>Instead of cooking full meals, you just prep a few key ingredients from each food group, and then mix and match them throughout the week to create different meals.</p>

      <p>Here's how it works:</p>

      <table>
        <thead>
          <tr>
            <th>Protein (Pick 2-3)</th>
            <th>Carbs (Pick 2-3)</th>
            <th>Veggies (Pick 3-4)</th>
            <th>Healthy Fats (Pick 1-2)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Grilled Chicken Breast</td>
            <td>Quinoa</td>
            <td>Roasted Broccoli</td>
            <td>Avocado</td>
          </tr>
          <tr>
            <td>Ground Turkey</td>
            <td>Brown Rice</td>
            <td>Sautéed Spinach</td>
            <td>Olive Oil</td>
          </tr>
          <tr>
            <td>Salmon</td>
            <td>Sweet Potatoes</td>
            <td>Bell Peppers</td>
            <td>Nuts & Seeds</td>
          </tr>
          <tr>
            <td>Eggs</td>
            <td>Oats</td>
            <td>Asparagus</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <p><strong>How to use it:</strong></p>

      <ol>
        <li><strong>Prep your ingredients:</strong> On Sunday, cook a big batch of your chosen proteins, carbs, and veggies. Store them in separate containers in the fridge.</li>
        <li><strong>Build your meals:</strong> Each day, just grab one item from each column to build your meals. For example:
          <ul>
            <li><strong>Lunch:</strong> Grilled chicken + quinoa + roasted broccoli + avocado</li>
            <li><strong>Dinner:</strong> Salmon + sweet potato + sautéed spinach + olive oil</li>
          </ul>
        </li>
      </ol>

      <p>This system gives you variety without the complexity. You're not eating the same exact meal every day, but you're also not spending hours in the kitchen.</p>

      <h2>5 Time-Saving Meal Prep Hacks for People Who Hate Cooking</h2>

      <p>If the Mix & Match Matrix still sounds like too much work, here are 5 time-saving hacks to make meal prep even easier:</p>

      <ol>
        <li><strong>Buy a Rotisserie Chicken:</strong> This is my #1 hack. A pre-cooked rotisserie chicken from the grocery store gives you 3-4 days' worth of lean protein with zero cooking required. Just shred it up and add it to your meals.</li>
        <li><strong>Use Frozen Veggies:</strong> Frozen vegetables are just as nutritious as fresh, and they're already chopped and ready to go. Just steam them in the microwave or roast them in the oven.</li>
        <li><strong>One-Pan Meals:</strong> Throw your protein and veggies on a sheet pan, drizzle with olive oil and spices, and roast at 400°F for 20-25 minutes. Minimal cleanup, maximum flavor.</li>
        <li><strong>Slow Cooker Magic:</strong> The slow cooker is your best friend. Just dump your ingredients in the morning, and you'll have a delicious, healthy meal waiting for you when you get home from work.</li>
        <li><strong>Embrace the "No-Cook" Lunch:</strong> A simple salad with grilled chicken, a can of tuna with some crackers, or a protein shake are all perfectly acceptable and healthy lunch options that require zero cooking.</li>
      </ol>

      <h2>Ready to Fuel The Grind?</h2>

      <p>Meal prep doesn't have to be a chore. With the right strategies, it can be a simple, sustainable habit that will help you reach your weight loss goals faster than you ever thought possible.</p>

      <p>If you're ready to take your nutrition to the next level, our <strong><a href="/shop">Fuel The Grind Meal Plan</a></strong> is the exact system I use to stay on track. It's not a diet, it's a lifestyle. It includes:</p>

      <ul>
        <li>The complete Mix & Match Matrix with dozens of food options</li>
        <li>10 "Cheat Code" recipes that are healthy, delicious, and easy to make</li>
        <li>A 7-day example meal plan to take the guesswork out of it</li>
        <li>And much more...</li>
      </ul>

      <p><strong><a href="/shop">Download the Fuel The Grind Meal Plan and start meal prepping like a pro today.</a></strong></p>
    `
  },
  "fitness-mistakes-after-40": {
    title: "Are You Making These 5 Common Fitness Mistakes After 40?",
    date: "Jan 16, 2026",
    author: "Reggie",
    category: "Training Tips",
    image: "/images/black-gloves-new.jpg",
    content: `
      <p>Working out in your 40s and beyond is different. Your body doesn't recover as quickly. Your metabolism is slower. The things that worked for you in your 20s might actually be doing more harm than good now.</p>

      <p>As a 48-year-old woman who has maintained a 160-pound weight loss after surgery, I've made all of these mistakes. I'm here to help you avoid them.</p>

      <p>These are the 5 most common fitness mistakes I see people making after 40, and what to do instead.</p>

      <h2>Mistake #1: Too Much Cardio, Not Enough Strength Training</h2>

      <p>This is the big one. So many people think that the key to weight loss is spending hours on the treadmill. But as we get older, we lose muscle mass, which slows down our metabolism. The most effective way to counteract this is with strength training.</p>

      <p>Muscle is your metabolic engine. The more muscle you have, the more calories you burn at rest. Strength training also helps to improve bone density, which is crucial for preventing osteoporosis.</p>

      <p><strong>What to do instead:</strong> Aim for at least 2-3 strength training sessions per week. This doesn't mean you have to become a bodybuilder. You can use dumbbells, resistance bands, or even just your own body weight. Our <strong><a href="/shop">ANCHR Gear Wireless Battle Ropes</a></strong> are a great tool for building strength and getting your heart rate up at the same time.</p>

      <h2>Mistake #2: Ignoring Your Mobility and Flexibility</h2>

      <p>Remember when you could jump out of bed in the morning without feeling like the Tin Man? Yeah, me neither.</p>

      <p>As we age, our joints get stiffer and our muscles get tighter. If you don't actively work on your mobility and flexibility, you're setting yourself up for injury.</p>

      <p><strong>What to do instead:</strong> Incorporate a 5-10 minute warm-up before every workout, and a 5-10 minute cool-down and stretch after every workout. This could include dynamic stretches like leg swings and arm circles before you start, and static stretches like holding a hamstring stretch after you're done. Yoga and Pilates are also fantastic for improving flexibility and mobility.</p>

      <h2>Mistake #3: Not Eating Enough Protein</h2>

      <p>Protein is the building block of muscle. If you're not eating enough protein, you're not going to be able to build or maintain muscle mass, no matter how hard you're working out.</p>

      <p>Protein also helps to keep you feeling full and satisfied, which is crucial when you're trying to lose weight.</p>

      <p><strong>What to do instead:</strong> Aim for 20-30 grams of protein with each meal. Good sources of protein include lean meats, poultry, fish, eggs, dairy, and legumes. If you struggle to get enough protein from food, a high-quality protein powder can be a convenient and effective supplement.</p>

      <h2>Mistake #4: Sacrificing Sleep for Workouts</h2>

      <p>I get it - you're busy. Sometimes the only time you can squeeze in a workout is at 5 AM. But if you're consistently sacrificing sleep for exercise, you're shooting yourself in the foot.</p>

      <p>Sleep is when your body recovers and repairs itself. If you're not getting enough sleep, your muscles won't be able to recover from your workouts, and you'll be more likely to get injured. Lack of sleep can also mess with the hormones that regulate your appetite, making you more likely to overeat.</p>

      <p><strong>What to do instead:</strong> Aim for 7-9 hours of quality sleep per night. If you have to choose between an extra hour of sleep and a workout, choose sleep. You can always do a shorter, more intense workout later in the day.</p>

      <h2>Mistake #5: Pushing Through the Pain</h2>

      <p>The "no pain, no gain" mentality is bullshit, especially after 40. There's a difference between the discomfort of a challenging workout and the sharp, stabbing pain of an injury.</p>

      <p>If you feel a sharp pain, stop what you're doing immediately. Pushing through the pain is a surefire way to turn a minor tweak into a major injury that could sideline you for weeks or even months.</p>

      <p><strong>What to do instead:</strong> Listen to your body. If something doesn't feel right, stop. Rest, ice, and if the pain persists, see a doctor or physical therapist. It's better to take a few days off to recover than to be forced to take a few months off because you were too stubborn to listen to your body.</p>

      <h2>Train Smarter, Not Harder</h2>

      <p>Working out in your 40s and beyond is all about training smarter, not just harder. By avoiding these common mistakes, you can stay healthy, get strong, and continue to make progress for years to come.</p>

      <p>If you're looking for a workout program that is specifically designed for people over 40 who want to rebuild their bodies after weight loss, check out our fitness equipment and meal plans at <strong><a href="/shop">ANCHR Gear</a></strong>.</p>

      <p><strong><a href="/shop">Train smarter with ANCHR Gear.</a></strong></p>
    `
  },
  "hidden-sugars": {
    title: "Why Your 'Healthy' Diet Isn't Working: The Truth About Hidden Sugars",
    date: "Jan 15, 2026",
    author: "Reggie",
    category: "Nutrition",
    image: "/images/hero-bg-final-user.png",
    content: `
      <p>You're doing everything right. You're eating salads, you're drinking smoothies, you're choosing the "low-fat" and "all-natural" options at the grocery store.</p>

      <p>So why aren't you losing weight? As someone who has to be incredibly diligent to maintain a 160-pound weight loss, I know how frustrating this can be.</p>

      <p>I'll tell you why: you're being sabotaged by hidden sugars.</p>

      <p>The food industry is sneaky. They know that sugar is addictive, so they cram it into everything, especially the foods they market as "healthy." You're not crazy - your "healthy" diet might be the very thing that's holding you back.</p>

      <p>This is the truth about hidden sugars, and how to finally break free.</p>

      <h2>The 5 "Healthy" Foods That Are Secretly Loaded With Sugar</h2>

      <p>You're going to be shocked by some of these. I know I was. These are the top 5 offenders when it comes to hidden sugars:</p>

      <table>
        <thead>
          <tr>
            <th>"Healthy" Food</th>
            <th>The Sugary Truth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Flavored Yogurt</strong></td>
            <td>A single serving of flavored yogurt can have more sugar than a can of Coke. That "fruit on the bottom" is basically just a syrupy dessert.</td>
          </tr>
          <tr>
            <td><strong>2. Granola & Cereal</strong></td>
            <td>Most breakfast cereals, even the "healthy" ones, are loaded with sugar. Granola is often held together with sugar and oil, making it a calorie bomb.</td>
          </tr>
          <tr>
            <td><strong>3. Salad Dressings</strong></td>
            <td>You make a beautiful, healthy salad, and then you drown it in a dressing that's full of sugar, unhealthy fats, and artificial ingredients. That seemingly innocent vinaigrette can have more sugar than a donut.</td>
          </tr>
          <tr>
            <td><strong>4. Protein Bars</strong></td>
            <td>Many protein bars are just candy bars in disguise. They're packed with sugar, artificial sweeteners, and other junk that you don't want in your body.</td>
          </tr>
          <tr>
            <td><strong>5. Smoothies</strong></td>
            <td>A smoothie can be a great way to get in your fruits and veggies, but if you're not careful, it can also be a sugar bomb. Many store-bought smoothies are loaded with fruit juice, sweetened yogurt, and other sugary ingredients.</td>
          </tr>
        </tbody>
      </table>

      <h2>How to Become a Sugar Detective</h2>

      <p>The only way to avoid hidden sugars is to become a sugar detective. You have to read the nutrition labels on everything you buy. Here's what to look for:</p>

      <h3>1. Check the "Added Sugars"</h3>

      <p>Thanks to a recent change in FDA regulations, most nutrition labels now have a line for "Added Sugars." This is the number you want to pay attention to. The American Heart Association recommends no more than 25 grams of added sugar per day for women, and 36 grams for men.</p>

      <h3>2. Know Sugar's Many Disguises</h3>

      <p>Sugar has over 60 different names. The food industry uses these different names to hide how much sugar is really in their products. Here are just a few of the most common ones to look out for:</p>

      <ul>
        <li>High-fructose corn syrup</li>
        <li>Agave nectar</li>
        <li>Barley malt</li>
        <li>Cane sugar</li>
        <li>Dextrose</li>
        <li>Fruit juice concentrate</li>
        <li>Maltodextrin</li>
        <li>Maple syrup</li>
        <li>Molasses</li>
        <li>Sucrose</li>
      </ul>

      <p>If you see any of these in the first few ingredients, put it back on the shelf.</p>

      <h3>3. The 5-Ingredient Rule</h3>

      <p>As a general rule of thumb, if a product has more than 5 ingredients, or if it has ingredients you can't pronounce, it's probably not a good choice. Stick to whole, unprocessed foods as much as possible.</p>

      <h2>Ready to Eat Clean?</h2>

      <p>Breaking up with sugar is hard. But it's one of the most important things you can do for your health and your weight loss goals.</p>

      <p>If you're tired of being sabotaged by hidden sugars and you're ready to learn how to eat clean, our <strong><a href="/shop">Fuel The Grind Meal Plan</a></strong> is the exact system I use to avoid these hidden sugars and stay on track. It's not a diet, it's a lifestyle. It's a comprehensive guide to clean eating that will teach you everything you need to know to break free from sugar and start fueling your body with the right foods. It includes:</p>

      <ul>
        <li>A complete guide to reading nutrition labels</li>
        <li>A list of over 60 names for sugar to look out for</li>
        <li>30+ delicious, low-sugar recipes</li>
        <li>And much more...</li>
      </ul>

      <p><strong><a href="/shop">Learn to eat clean with our Fuel The Grind Meal Plan.</a></strong></p>
    `
  }
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const postId = params?.id;
  const post = postId ? BLOG_POSTS[postId as keyof typeof BLOG_POSTS] : null;

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="h-[40vh] md:h-[50vh] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full z-20 p-4 md:p-12 bg-gradient-to-t from-background to-transparent">
          <div className="container mx-auto">
            <span className="bg-primary text-primary-foreground text-xs font-bold uppercase px-3 py-1 tracking-widest mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-white mb-4 max-w-4xl leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-300 space-x-6 uppercase tracking-wider font-bold">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 font-bold uppercase text-sm tracking-widest transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to The Grind Blog
          </Link>
          
          <div 
            className="prose prose-invert prose-lg max-w-none 
              prose-headings:font-heading prose-headings:uppercase prose-headings:font-bold 
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-strong:text-foreground prose-strong:font-bold
              prose-li:text-muted-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-table:border-collapse prose-table:w-full
              prose-th:border prose-th:border-border prose-th:bg-card prose-th:p-3 prose-th:text-left prose-th:font-bold prose-th:uppercase prose-th:text-sm
              prose-td:border prose-td:border-border prose-td:p-3 prose-td:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center">
              <Share2 className="w-4 h-4 mr-2" /> Share this post
            </h3>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-12">
          {/* About Widget */}
          <div className="bg-card border border-border p-8">
            <h3 className="text-xl font-heading font-bold uppercase mb-4">About The Author</h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Reggie is the founder of ANCHR Gear. After losing 160lbs, she's on a mission to help others build strength and confidence from the comfort of their own homes.
            </p>
            <Link href="/about">
              <Button variant="link" className="p-0 h-auto font-bold uppercase tracking-widest text-primary hover:no-underline">
                Read Full Story &rarr;
              </Button>
            </Link>
          </div>

          {/* Shop Widget */}
          <div className="bg-primary/10 border border-primary/20 p-8 text-center">
            <h3 className="text-xl font-heading font-bold uppercase mb-4">Ready to Grind?</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Get the gear used in this workout. No excuses.
            </p>
            <Link href="/shop">
              <Button className="w-full uppercase font-bold tracking-widest">
                Shop Gear
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
