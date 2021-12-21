

Favorite.destroy_all
Trip.destroy_all
User.destroy_all
Place.destroy_all
ThingsToDo.destroy_all
TripPlanner.destroy_all
 puts"Seeding started..."

first=User.create(first_name:"Haarika",last_name:"Ramadugu",city:"San Jose",image:"https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",username: "haarika_r",email: "hramadugu@gmail.com",password:"12345asd")
second=User.create(first_name:"Raj",last_name:"Bhatla",city:"San Jose",image:"https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",username: "raj",email:"nrmadhu999@gmail.com",password:"12345lsd")
third=User.create(first_name:"Ruchi",last_name:"Yevle",city:"Vadodara",image:"https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",username: "ruchi",email:"yevleru@gmail.com",password:"12345fgh")




TripPlanner.create(user_id:first.id,plan_name:"Honeymoon",destination:"Singapore",hotel_name:"Ambasador Suites",hotel_address:"Changa Singapore International Airport",hotel_checkin:"03/12/18",hotel_checkout:"03/12/18",flight_name:"Singapore Airlines",flight_number:6627,flight_to:"Singapore",flight_from:"Hong-Kong",trip_start:"03/12/18",trip_end:"03/12/18",notes:"its going to be lit!!!")

TripPlanner.create(user_id:third.id,plan_name:"Trip to Bangalore",destination:"Bangalore",hotel_name:"JW Marriott",hotel_address:"Near EMbassy Tech Park,Marathalli,Bangalore",hotel_checkin:"04/12/16",hotel_checkout:"04/23/16",flight_name:"Air India",flight_number:66,flight_to:"Bangalore",flight_from:"Ahmedabad",trip_start:"04/11/16",trip_end:"04/24/16",notes:"work work work.....!!")

singapore = Place.create(city:"Singapore city",state:"Singapore",country:"Republic of Singapore",image:"https://media-s3-us-east-1.ceros.com/forbes/images/2021/08/03/606c8d08156feafd2759dd4acca7f530/singapore-rl-lander-1920x1090.jpg")
bangalore = Place.create(city:"Bangalore",state:"Karnataka",country:"India",image:"https://cdn.britannica.com/21/101221-050-5760EB13/Taj-Mahal-one-Agra-India-masterpieces-world.jpg")
las_vegas = Place.create(city:"Las Vegas",state:"Nevada",country:"United States of America",image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/8a/e0/b9/bellagio-las-vegas.jpg?w=900&h=-1&s=1")
washington = Place.create(city:"Washington DC",state:"",country:"United States of America",image:"https://static.parade.com/wp-content/uploads/2021/01/white-house-history.jpg")
petra = Place.create(city:"Petra",state:"",country:"Jordan",image:"https://velvetescape.com/wp-content/uploads/2011/11/IMG_1953-1280x920.jpg")
machu_pichu = Place.create(city:"Cuzco",state:"",country:"Peru",image:"https://i.guim.co.uk/img/media/55e46c45fe4f70f64c0b3439fcd1aaeba232df6d/0_236_5120_3072/master/5120.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ac526af824faa26c936862df1859156a")

# turkey = Place.create(city:"Istanbul",state:"",country:"Turkey",image:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/covers-for-winter-turkey.jpg")

ThingsToDo.create(place_id:singapore.id,name:"Gardens at the Bay",description:"This is a hugely popular tourist attraction in Singapore, and rightly so. The breadth of plants and the creative ways in which they're displayed is awe-inspiring. In one part of the conservatory, the Cloud Forest mimics the cool-moist ecology of the tropical highlands. It has a treetop walk and an oft-photographed indoor 114-foot waterfall. ",category:"Activity",expense:"$",rating:4,image:"https://afar-production.imgix.net/uploads/images/post_images/images/FH4WdZpSCC/original_7d0d74d7c60b72c7e76799a30334803e.jpg?1521203247?ixlib=rails-0.3.0&auto=format%2Ccompress&crop=entropy&fit=crop&h=719&q=80&w=954")

ThingsToDo.create(place_id:singapore.id,name:"National Gallery Singapore",description:"National Gallery Singapore owns the largest public collection of modern art in Southeast Asia. It's spread across two beautiful national monuments: City Hall and the country’s former Supreme Court ",category:"Activity",expense:"$$",rating:5,image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/13168/production/_86848187_sng_opengallery_afp.jpg")

ThingsToDo.create(place_id:singapore.id,name:"Merlion Park",description:"This promenade overlooking Marina Bay is home to Singapore's iconic 28-foot Merlion statue, a half-fish, half-lion stone carving that shoots water into the bay. The fish symbolizes Singapore's beginnings as a fishing village while the lion head is a nod to Singapura, which means Lion City in Malay ",category:"Attraction",expense:"$$$",rating:5,image:"https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/09/social-mer-park.jpg")

ThingsToDo.create(place_id:bangalore.id,name:"Bannerghatta National Park",description:"The Bannerghatta National Park was established in the year 1971. The park has been famously hailed for housing a wide variety of birds and animals and is especially known for its tiger and lion safari. Boasting of an exquisite variety of flora and fauna, the park is a treat for animal lovers and children.",category:"Activity",expense:"$",rating:3,image:"https://karnataka.b-cdn.net/wp-content/uploads/2008/10/Bannerghatta-National-Park-Tiger.jpg")

ThingsToDo.create(place_id:bangalore.id,name:"Lalbagh Botanical Garden",description:"Lalbagh Botanical Garden or shortened Lalbagh, is an old botanical garden in Bengaluru, India. First planned and laid out during the dalavaiship of Hyder Ali and later managed under numerous British Superintendents before Indian Independence. It was responsible for the introduction and propagation of numerous ornamental plants as well as those of economic value",category:"Attraction",expense:"$",rating:4,image:"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_154851008_20200123162547_20200123162603.png")

ThingsToDo.create(place_id:bangalore.id,name:"Bangalore Palace",description:"The Bangalore Palace was the private residence of the royal Wodeyar family. Built to resemble Windsor Castle, this quirky palace is filled with an interesting and eclectic collection of art and paraphernalia from a bygone era. ",category:"Attraction",expense:"$$",rating:4,image:"https://www.makemytrip.com/travel-guide/media/dg_image/bangalore/Bangalore-Palace.jpg")

ThingsToDo.create(place_id:las_vegas.id,name:"The Strip",description:"The Las Vegas Strip is a stretch of Las Vegas Boulevard South in Clark County, Nevada, that is known for its concentration of resort hotels and casinos.",category:"Attraction",expense:"$$$",rating:4,image:"https://a.cdn-hotels.com/gdcs/staging159/d278/e5832ec1-b7d8-4ea7-8e78-224036cbc90f.jpg")
ThingsToDo.create(place_id:las_vegas.id,name:"Fountains of Bellagio",description:"These 200-foot-tall fountains at the Bellagio Hotel are choreographed to music for performances.",category:"Attraction",expense:"$",rating:"5",image:"https://www.tripsavvy.com/thmb/Lt4NkoIg5rwrCn4qbLlFFUfw7aw=/1333x1000/smart/filters:no_upscale()/bellagio-fountains-5942e5683df78c537b5c302e.jpg")
ThingsToDo.create(place_id:las_vegas.id,name:"High Roller
 ",description:"Measuring 520 feet in diameter, the High Roller eclipses both the London Eye and Singapore Flyer. Facing north and south parallel to Las Vegas Boulevard, the wheel takes 30 minutes to complete one full revolution and features 28 glass-enclosed cabins with broad views of Las Vegas and the Strip",category:"Activity",expense:"$$",rating:4,image:"https://media.lasvegasmagazine.com/media/img/photos/2020/06/18/High_Roller_LD_t1024.jpg?b3f067808e872500b33dd7ef4ee517933144b05a")
ThingsToDo.create(place_id:las_vegas.id,name:"Hoover Dam Bypass",description:"Hoover Dam is a concrete arch-gravity dam in the Black Canyon of the Colorado River, on the border between the U.S. states of Nevada and Arizona. It was constructed between 1931 and 1936 during the Great Depression and was dedicated on September 30, 1935, by President Franklin D. Roosevelt",category:"Attraction",expense:"$",rating:4,image:"https://images2.minutemediacdn.com/image/upload/c_crop,h_1174,w_2089,x_0,y_0/v1594143174/shape/mentalfloss/67916-hoover_dam.jpg?itok=EfP1R_YF")

ThingsToDo.create(place_id:washington.id,name:"Smithsonian National Museum of Natural History",description:"Established in 1910 and located on the National Mall, this prestigious museum, part of the Smithsonian Institution, holds the world's most extensive collection of natural history specimens and human artifacts including the remains of dinosaurs and tools used by early man.",category:"Activity",expense:"$",rating:3.5,image:"https://washington.org/sites/default/files/michellefortephotography_overview-of-museum-of-natural-history-atrium_mydccool-via-crowdriff.jpg")
ThingsToDo.create(place_id:washington.id,name:"Lincoln Memorial
",description:"The Lincoln Memorial is a US national memorial built to honor the 16th president of the United States, Abraham Lincoln. It is on the western end of the National Mall in Washington, D.C., across from the Washington Monument, and is in the form of a neoclassical temple. The memorial's architect was Henry Bacon.",category:"Attraction",expense:"$",rating:4.5,image:"https://www.thechurchillhotel.com/resourcefiles/attractionsmallimages/monuments-the-lincoln-memorial-of-churchill-hotel-near-embassy-row-washington.jpg")
ThingsToDo.create(place_id:washington.id,name:"National Gallery of Art
 ",description:"The National Gallery of Art—the nation’s museum—preserves, collects, exhibits, & fosters understanding of works of art.",category:"Activity",expense:"$",rating:"4",image:"https://images.squarespace-cdn.com/content/v1/50b67298e4b05c3cd8b81744/1510347474197-HDHU1LHUKYXI8U7N58HR/National+Gallery+of+Art.jpg?format=2500w")

ThingsToDo.create(place_id:washington.id,name:"Library of Congress",description:"Though the Library of Congress doesn't own every book ever published, it sure has most of them, with 532 miles of shelves and 115 million items, with 7,000 added each working day. ",category:"Attraction",expense:"$$",rating:3.5,image:"https://dcist.com/wp-content/uploads/sites/3/2020/02/library-of-Congress-Image-10-1024x684.jpg")

ThingsToDo.create(place_id:washington.id,name:"National Mall",description:"Open area of gardens, fountains, trees and monuments stretching nearly two miles between the Capitol and the Lincoln Memorial.",category:"Acitivty",expense:"$",rating:4,image:"https://cdn.getyourguide.com/img/location/5c8f6f4503c62.jpeg/88.jpg")


ThingsToDo.create(place_id:petra.id,name:"Monastery (Al Dayr)",description:"A UNESCO World Heritage Site, Petra (ancient capital city of the Nabataean people) recently proclaimed as one of the New Seven Wonders of the World. ",category:"Attraction",expense:"$$",rating:5,image:"https://cdn.britannica.com/88/189788-050-9B5DB3A4/Al-Dayr-Petra-Jordan.jpg")
ThingsToDo.create(place_id:petra.id,name:"Al-Khazneh",description:"Be prepared for the breathtaking sight of this 2000-year-old monument which resembles a Greek temple with an urn at the top that was once reputed to hold priceless treasures. ",category:"Attraction",expense:"$$",rating:"5",image:"https://madainproject.com/content/media/collect/khazneh_82378.jpg")

ThingsToDo.create(place_id:machu_pichu.id,name:"Santuario Historico de Machu Picchu",description:"Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery",category:"Activity",expense:"$$",rating:"5",image:"https://i.guim.co.uk/img/media/b56952349419f749667d43f38b4d05e2980821a2/0_176_6016_3611/master/6016.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=d1d59c0c9b0e70e1da5989902cf5f01c")
ThingsToDo.create(place_id:machu_pichu.id,name:"Mandor",description:"Mandor is a family initiative for enviromental protection located 4Km from Machu Picchu village (Aguas Calientes). This property offer well maintained trails where you can walk into biodiverse gardens enjoying, learning and at the same time contributing to the restoration and preservation of the habitat of hundreds of species of flora and fauna. ",category:"Activity",expense:"$",rating:"3.5",image:"https://www.anywhere.com/img-a/attraction/mandor-waterfall-peru/Mandor-Waterfalls-A-1-jpg")
ThingsToDo.create(place_id:machu_pichu.id,name:"Mariposario de Machupicchu
",description:"Marked trails, info panels & talks in a forest nature park home to thousands of butterfly species.",category:"Activity",expense:"$",rating:"4",image:"https://www.boletomachupicchu.com/gutblt/wp-content/images/mariposas-mapi-1.jpg")


puts"Seeding done..."