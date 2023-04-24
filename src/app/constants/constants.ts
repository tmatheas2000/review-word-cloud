import { Review } from "../models/models";

export class Data {
    public static colorCode: Array<string> = ['#004D00', '#3DF700', '#FF0000', '#E11820', '#C61938']
    public static reviews: Array<Review> = [
        {
            id: 1,
            author: 'Laura',
            reviewText: 'Fantastic independent bakery with a large selection of breads, quiches, cakes, cupcakes, pastries, cookies, and other savory and sweet treats. Their gourmet cakes and cupcakes are beautifully decorated and tailored to the season. Their window decor is seasonal, lovely, and very creative. The owners clearly care about their business and it shows. This place is very popular and often has a line.',
            rating: 5
        },
        {
            id: 2,
            author: 'Frank Wing',
            reviewText: 'This long time local bakery maintains its history of great taste and unusual combinations. I like their large chunk fig bread reminiscent of similar Parisian loaves. And the cherry chocolate bread doesn’t skimp on ingredients either with healthy bits of fruit and meltable chocolate nuggets that smell wonderful in the toaster. Another personal favorite is their seed coated caramelized onion bits baguettes which share their fragrance in the bag driving home and explodes with sweet aroma when toasted.',
            rating: 5
        },
        {
            id: 3,
            author: 'Yassy Chan',
            reviewText: 'Classic bakery but was slightly disappointed by the items we ordered. The turtle cheesecake was a bit too dense and also didn\'t really have much flavor. The quiche lorraine was just ""okay"" and seemed to be lacking in flavor. Though my husband loves quiches so we tried the same item in the West Portal outlet and it was absolutely delicious. What they did get right in both places was the crust on the quiche - it was buttery and just the right amount of flakiness. The one item I really did like though from this outlet was the lemon tart - it was just the right amount tart and they nailed the crust again. Based on the items that I tried, I would say that their breads and baked crusts are winners and I just need to try those the next time.',
            rating: 3
        },
        {
            id: 4,
            author: 'Roy Chan',
            reviewText: 'Can’t trust them. I’m in charge of getting a birthday cake for my associate on this Saturday after the bakery’s 2-days off for Thanksgiving and Black Friday. I did call on Tuesday, they did confirm the gluten free cakes would be available by 9 am. I promptly arrived and was told the gluten free cakes won’t be available today.',
            rating: 1
        },
        {
            id: 5,
            author: 'L S Bell',
            reviewText: 'It vaguely looks like what is posted in the online ordering shot (at left). "Large" is about 7-inch diameter. I think the actual 4 blueberries on mine must be the ones that spilled off in their overflowing photo. Fortunately, their stuff tastes great, but if you do online orders, don\'t count on it really looking like the photos.',
            rating: 2
        },
        {
            id: 6,
            author: 'I Illyria',
            reviewText: 'Cake is okay. Drove 85 miles to get a cake for my own birthday and both times I spoke with someone on the phone, I was spoken to rudely and unprofessionally. Absolutely not coming back and whoever she is she\'s hurting your business Edit: I had sent you an email regarding this issue before ever posting my review, and you have ignored it.',
            rating: 1
        },
        {
            id: 7,
            author: 'Bon Manhkong',
            reviewText: 'This bakery will blow your mind! It was so good, my friend and I went back the next day! The mini cupcakes are an explosion in your mouth! My favorite cupcake was the Lemon Drop. My friend loved the Red Velvet. The 2nd time we got cookies... Pecan chocolate chip and oatmeal raisin. Soon Good!! The coffee there is nice too! I\'m allergic to eggs and dairy and am probably suffering from it right now... But totally worth it! LoL',
            rating: 5
        },
        {
            id: 8,
            author: 'Jeanette Mathews',
            reviewText: 'Ordered cupcakes for an event and the packaging they have is really not stable enough to hold even the mini cupcakes. I only walked one block to the car, then drove a bit (with bag propped fully upright and secured so it didn\'t shift). Then walk another few blocks to the venue, and all the cupcakes were destroyed. The cupcakes just fell over because the cardboard holders were too low and the center of gravity is high due to the icing and such.  Not like some of the cupcakes.  Literally every cupcake was ruined. Delicious flavors but won\'t get the cupcakes to go again.',
            rating: 2
        },
        {
            id: 9,
            author: 'Andrew Grossman',
            reviewText: 'We are gluten free and Noe Valley Bakery made the most amazing gluten free cake for my partner’s birthday. We also tried a raspberry tart of some kind (almond filling?) and a gluten free crust. The raspberry flavor was off the wall fresh and full! I have found my new favorite bakery in the Bay Area. I’ll be back for any special occasion. 😍',
            rating: 5
        },
        {
            id: 10,
            author: 'Rubi Navarro',
            reviewText: 'My husband ordered a Birthday cake for our party, they were supposed to delivered it at the party venue, but the CAKE NEVER ARRIVED and they never called us.  After we contacted them, they said they left it outside our address instead, WHO DOES THAT IN SF, WITHOUT PREVIUOS NOTICE? So we never found the cake. The kids in the party were super sad about the missing cake :(We used to order cakes from here, but after this experience and after reading many bad experiences as mine in other comments, it seems that they are constantly having bad service so NEVER BUYING AGAIN.',
            rating: 1
        },
        {
            id: 11,
            author: 'Myriam JS',
            reviewText: 'One of my favorite bakery in San Francisco! Located in the best neighborhood of "Noe Valley", you\'ll find a delicious bakery. Have been ordering  the cheese scone for years now and the salted chocolate cupcake.  Yummyyyy. Price is good and staff are always nice. Definitely make a stop whenever you are by this neighborhood! Can\'t wait to go back there!',
            rating: 5
        },
        {
            id: 12,
            author: 'Linda Grigorik',
            reviewText: 'They have really taste scones! I liked both their savory and sweet ones! Aiming to go back and try some of their other pastries.',
            rating: 4
        },
        {
            id: 13,
            author: 'Tess A',
            reviewText: 'Very rude and unprofessional. Baked goods are okay, but not worth going back when staff treats customers so poorly.',
            rating: 1
        },
        {
            id: 14,
            author: 'Andrea Santos',
            reviewText: '- i thought the jalapeño bacon scone was good but nothing too special - would get the twice baked almond croissant again! it was flaky and had a good amount of filling inside',
            rating: 4
        },
        {
            id: 15,
            author: 'Frontier Cookers',
            reviewText: 'Definitely in my top three for bakeries',
            rating: 5
        },
        {
            id: 16,
            author: 'kathleen campbell',
            reviewText: 'I ordered online and paid in advance for cupcakes for a child\'s birthday party. Was told on the phone there was curbside pickup. There wasn\'t. When i went inside to pick up my order it wasn\'t ready as promised and the clerk told me to get in line behind ten people. Finally someone emerged from the work area with my order. At the party the cupcakes were soft and mushy, falling apart. Not worth the drama. Plenty of better bakeries.',
            rating: 1
        },
        {
            id: 17,
            author: 'Katheryng Salgado',
            reviewText: 'Items are maybe a little sweeter than most bakeries but still very tasty. The chocolate bomb was a good different treat.',
            rating: 4
        },
        {
            id: 18,
            author: 'violet',
            reviewText: 'choc. croissant, almond croissant, butter croissant, and cheddar + chive scone are all super delicious',
            rating: 5
        },
        {
            id: 19,
            author: 'Karla Mei Robertson',
            reviewText: 'Good, not great bakery. It’s a solid choice with a wide variety of baked goods and decent coffee. And the prices are fair. But you should consider it a neighborhood place and not a destination like Tartine or one of the countless other fancier bakeries. This is the place to visit regularly or buy your kids birthday cake from.',
            rating: 4
        },
        {
            id: 20,
            author: 'Alexa Barnes',
            reviewText: 'Beautiful and delicious cakes! They even added a custom message free of charge when I went to pick it up.',
            rating: 5
        },
        {
            id: 21,
            author: 'Alice knows',
            reviewText: 'Hey ya\'ll,  I picked up my order on the the 7th and at last minute I bought the Asiago bread which was clearly not right. I couldn\'t serve it. I\'m complaining because I drove so far to pick up.  Just a bad batch I quess.',
            rating: 1
        },
        {
            id: 22,
            author: 'jen do',
            reviewText: 'Love all the goodies a little pricey for me, but worth it! My most favorites is the raspberry cheese cake, fruit tart & carrot',
            rating: 4
        },
        {
            id: 23,
            author: 'Robert Meyer',
            reviewText: 'Always a pleasant experience and I enjoy the cupcakes. But at the price you pay for a birthday cake, I expected it to taste great. Not “fine,” which was how it tasted. Ah well.',
            rating: 3
        },
        {
            id: 24,
            author: 'Kristen Shepherd',
            reviewText: 'I ordered two cakes for my daughters birthday that I was very disappointed with, I had ordered butter cream and got whipped cream on both cakes. I submitted my complaint online and want to thank Mary for her timely response to my complaint! Not only did she apologize for the mistake as assured me she would pass along to the cake manager, but she also refunded the full amount, which I wasn’t expecting! Because of this, I will most definitely give them a second go next time I am in need of a cake, everyone makes mistakes, even the best of the best as it was in this case! Thanks again Mary!! ❤️',
            rating: 5
        },
        {
            id: 25,
            author: 'Mayza Alves',
            reviewText: 'A little pricey but very good pastries',
            rating: 4
        },
        {
            id: 26,
            author: 'Patrick Mccann',
            reviewText: 'Great baked goods. Great staff.',
            rating: 5
        },
        {
            id: 27,
            author: 'Carrie Liang',
            reviewText: 'Pastry: 3/5 (almond croissant, very average, not worth the long wait) Service: -5/5 (applied to my experience on 2/12/21 at 9am) Overall: -2/5, negative score if Google allows me Waited in line for 30-min until its my turn, waited another 5-min while inside the store due to all three people working at the front chose to ignore me (only one person was servicing another customer at the time). I said ""excuse me"" at least three times while waiting and finally caught the attention of the person who was servicing the other customer to which she replied ""I am busy and cannot help you"". I understood her reason but that tone was just so rude. Moments later, one of the two other ladies who weren\'t busy finally decided to come take my order. What a waste of my Friday morning for overpriced average almond croissant.',
            rating: 1
        },
        {
            id: 28,
            author: 'Andrew Ozhyndovskyy',
            reviewText: 'This is ridiculous! This has been one of our favorite jewish bakery for a long time-out for some reason this time that we went was terrible. Firs the service and attentiveness of the workers where terrible. They where also extremely rude not letting us into the bathroom even though it was not out of order and it was also not in cleaning yet. When we bought 4 rugula and 4 macaroons but we only received 3 of each. After this we had to remind staff to finish our order. In all it was not very good.',
            rating: 2
        },
        {
            id: 29,
            author: 'Garrett Turner',
            reviewText: 'Great cakes and cupcakes with a variety of flavors. The salted caramel cake is especially tasty. The quiche makes for a hearty breakfast and the breads are outstanding.',
            rating: 5
        },
        {
            id: 30,
            author: 'Alex Mackenzie-Torres',
            reviewText: 'I love their cupcakes (Boston cream, Chocolate in particular) and their coffee is not too bad. I´ve never ordered one of their cakes but they look quite tempting. Easter buns are simply magic. A bit overpriced in my opinion but the quality is pretty good.',
            rating: 4
        },
        {
            id: 31,
            author: 'Olivia',
            reviewText: 'Turtle cheesecake: 1/5, only redeeming factor is the Oreo crust. The chocolate center is made with cloyingly sweet chocolate and the cheesecake is all the calories without any mouthfeel of creamy indulgence. Brownie: 3/5, nothing to write home about, better after it’s been in the freezer and becomes chewy. I prefer my homemade brownies. Small fruit tart: 2/5: this was most disappointing of all because there’s so much potential for a good fruit tart. The pastry dough used is rather flavorless without the authentic delicate, buttery profile I love in tart crusts. The crème pâtissière was dull as well. It’s infinitely easy to make good crème pâtissière, what’s the issue here? Seeded bread loaf: 4/5: this is very good execution. Even if I’m not that into pepitas, I think most people would enjoy this bread. I’ll probably have to commute back to Thorough Bread and Pastry for real quality tarts. I’ll keep testing NVB, though, and will report back if I find a cake or tart of high quality. You never know! Maybe I made all the wrong choices.',
            rating: 2
        },
        {
            id: 32,
            author: 'Brian Wong',
            reviewText: 'They still make you line up outside like peak COVID times.',
            rating: 1
        },
        {
            id: 33,
            author: 'Maureen O',
            reviewText: 'VERY disappointed with the Irish soda bread. It had no raisins or currants. It was dry & bland even after it was toasted with butter. Loved the Irish cream cupcakes, they were delicious',
            rating: 3
        },
        {
            id: 34,
            author: 'Tainã Santana',
            reviewText: 'They have the best red velvet cake I’ve ever had in my life! I highly recommend it!!!! Customer service was also very good. Thank you very much!',
            rating: 5
        },
        {
            id: 35,
            author: 'Vittoria Cripps',
            reviewText: 'I  absolutely  LOVE their double  raisin bread  !! It’s great loads of  raisins  ; dark & light ones ..really good also their  scones  .. seems like every bakery has their own way of making scones I really like the scones at Noe Valley bakery really crunchy on the outside and nice nice and soft on the inside really good ...',
            rating: 4
        },
        {
            id: 36,
            author: 'Suzie Oh',
            reviewText: 'Very lovely and reliable bakery. Their croissants are the absolute best. Their chocolate and almond croissants will not disappoint. There is almost always a line and can get pretty crowded, but you will get served pretty quickly.',
            rating: 4
        },
        {
            id: 37,
            author: 'Sheila Keating',
            reviewText: 'I want to love local businesses. I suck up the cost and buy things. Tonight I bought things and half way home realized it was a light bag, looked and found out that things I paid for were missing. I thought I forgot my bag on the counter...it was my fault and they would be waiting to give it back to me. I returned to find the door locked and a closed sign. There were 4 people inside. I knocked on the door. No one looked up. I knocked and I knocked. Finally someone opened the door a couple inches and asked what I wanted. They had no idea who I was, why I was there and what I wanted. It was not my fault. They did not even care.. They slipped missing pastry in my bag and glad to see me go...no sorry for forgetting, no here is an extra piece for our mistake. The shop was closed and the extras would be going in the bin. I am so angry and I will definitely not be back. I can do better. Thanks Noe Valley Bakery for pointing that out.',
            rating: 1
        },
        {
            id: 38,
            author: 'Suzanne Frey',
            reviewText: 'Underwhelmed - benefits from being one of a few bakeries in the hood. Asaigo/cheddar bread was tasteless - scone ok. Like',
            rating: 3
        },
        {
            id: 39,
            author: 'Ian Mationg',
            reviewText: 'Good quality baked goods but the line up and the crowd isnt worth the price nor the wait. Good selection of bread, but worth it if you\'re able to catch them on a not so busy day to buy it. All freshly made though and they do sell out. The place is small and crowded with strollers on weekends so important to ask who\'s in line and who\'s waiting for what other wise you could be there for a while waiting for nothing.',
            rating: 3
        },
        {
            id: 40,
            author: 'LT Tso',
            reviewText: 'It\'s a great San Francisco institution! Scrumptious cakes, tarts, cookies, and other desserts, as well as fancy bread, grab and go sandwiches, etc.',
            rating: 5
        },
        {
            id: 41,
            author: 'V10LET V1XEN',
            reviewText: 'Loved the begals and the service',
            rating: 5
        },
        {
            id: 42,
            author: 'Arnaud Lacombe',
            reviewText: 'Absolutely horrible service. It doesn\'t even deserve a single star. This bakery behave rigidly and refuses to take clients before business hours even if all the staff is there. They will spend the time to tell you to go away, but not serve you. This is _unprofessional_. Fortunately, a coffee shop was open not far from there, gladly took my money, and I got my croissant.',
            rating: 1
        },
        {
            id: 43,
            author: 'Cynthia Garner',
            reviewText: 'The king cake is not king cake.. it\'s a croissant in the shape and color of king cake. It didn\'t taste bad, but it was not worth the 2 hour drive each way.',
            rating: 3
        },
        {
            id: 44,
            author: 'Marco Martinez',
            reviewText: '"- The staff is helpful and answer any question I have. They are also very quick with your orders. The scones are my favorite since they have a crunchy outside and soft inner. If there is a line it will move quick.',
            rating: 4
        },
        {
            id: 45,
            author: 'JP Martinez',
            reviewText: 'Well, I expected a better cake in relation to the price-quality but I was disappointed, because the cake was not fresh, since the bread was dry, we will have to change the pastry shop',
            rating: 1
        },
        {
            id: 46,
            author: 'Mike Whitright',
            reviewText: 'The cupcakes were decorated well, but each of them were very dry. We tried 3 different kinds, and all were dryer than cupcakes made from a box mix.',
            rating: 2
        },
        {
            id: 47,
            author: 'Brian Wong',
            reviewText: 'Fruit Bread with Mission Fig is phenomenal. Every bite is full of figs, I\'ll probably finish the entire loaf by the end of the day. It\'s a must try. 😋',
            rating: 5
        },
        {
            id: 48,
            author: 'Jellie Siat',
            reviewText: 'The cake was really moist the the frosting was super good! I got the red velvet full cake, really sweet and rich.',
            rating: 4
        },
        {
            id: 49,
            author: 'Brenda Duran',
            reviewText: 'The food is really good!',
            rating: 5
        },
        {
            id: 50,
            author: 'Veena Krishnamoorthy',
            reviewText: 'Excellent bread and pastries. One of the best in SF. Totally worth the wait',
            rating: 5
        },
        {
            id: 51,
            author: 'Oliver L',
            reviewText: 'Very mediocre with high prices. Often has long lines with average to unfriendly staff. Not sure why it’s so popular.',
            rating: 3
        },
        {
            id: 52,
            author: 'Erin Park',
            reviewText: 'It’s one of those overpriced bakery in sf but hands down for their carrot cake',
            rating: 4
        },
        {
            id: 53,
            author: 'Karen Malca',
            reviewText: 'I love every wonder I try from them.❤️❤️❤️',
            rating: 5
        }
    ]
}