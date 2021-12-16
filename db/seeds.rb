

Favorite.destroy_all
Trip.destroy_all
User.destroy_all
Place.destroy_all
ThingsToDo.destroy_all
TripPlanner.destroy_all
 puts"Seeding started..."

first=User.create(first_name:"Haarika",last_name:"Ramadugu",city:"San Jose",image:"https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",username: "haarika_r",email: "hramadugu@gmail.com",password_digest:"12345asd")
second=User.create(first_name:"Raj",last_name:"Bhatla",city:"San Jose",image:"https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",username: "raj",email:"nrmadhu999@gmail.com",password_digest:"12345lsd")
third=User.create(first_name:"Ruchi",last_name:"Yevle",city:"Vadodara",image:"https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",username: "ruchi",email:"yevleru@gmail.com",password_digest:"12345fgh")




TripPlanner.create(user_id:first.id,plan_name:"Honeymoon",destination:"Singapore",hotel_name:"Ambasador Suites",hotel_address:"Changa Singapore International Airport",hotel_checkin:"03/12/18",hotel_checkout:"03/12/18",flight_name:"Singapore Airlines",flight_number:6627,flight_to:"Singapore",flight_from:"Hong-Kong",trip_start:"03/12/18",trip_end:"03/12/18",notes:"its going to be lit!!!")

TripPlanner.create(user_id:third.id,plan_name:"Trip to Bangalore",destination:"Bangalore",hotel_name:"JW Marriott",hotel_address:"Near EMbassy Tech Park,Marathalli,Bangalore",hotel_checkin:"04/12/16",hotel_checkout:"04/23/16",flight_name:"Air India",flight_number:66,flight_to:"Bangalore",flight_from:"Ahmedabad",trip_start:"04/11/16",trip_end:"04/24/16",notes:"work work work.....!!")

singapore = Place.create(city:"Singapore city",state:"Singapore",country:"Republic of Singapore")
bangalore = Place.create(city:"Bangalore",state:"Karnataka",country:"India")

ThingsToDo.create(place_id:singapore.id,name:"Gardens at the Bay",description:"This is a hugely popular tourist attraction in Singapore, and rightly so. The breadth of plants and the creative ways in which they're displayed is awe-inspiring. In one part of the conservatory, the Cloud Forest mimics the cool-moist ecology of the tropical highlands. It has a treetop walk and an oft-photographed indoor 114-foot waterfall. ",category:"Activity",expense:"$",rating:4,image:"https://afar-production.imgix.net/uploads/images/post_images/images/FH4WdZpSCC/original_7d0d74d7c60b72c7e76799a30334803e.jpg?1521203247?ixlib=rails-0.3.0&auto=format%2Ccompress&crop=entropy&fit=crop&h=719&q=80&w=954")

ThingsToDo.create(place_id:singapore.id,name:"National Gallery Singapore",description:"National Gallery Singapore owns the largest public collection of modern art in Southeast Asia. It's spread across two beautiful national monuments: City Hall and the country’s former Supreme Court ",category:"Activity",expense:"$$",rating:5,image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/13168/production/_86848187_sng_opengallery_afp.jpg")

ThingsToDo.create(place_id:singapore.id,name:"Merlion Park",description:"This promenade overlooking Marina Bay is home to Singapore's iconic 28-foot Merlion statue, a half-fish, half-lion stone carving that shoots water into the bay. The fish symbolizes Singapore's beginnings as a fishing village while the lion head is a nod to Singapura, which means Lion City in Malay ",category:"Attraction",expense:"$$$",rating:5,image:"https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/09/social-mer-park.jpg")

ThingsToDo.create(place_id:bangalore.id,name:"Bannerghatta National Park",description:"The Bannerghatta National Park was established in the year 1971. The park has been famously hailed for housing a wide variety of birds and animals and is especially known for its tiger and lion safari. Boasting of an exquisite variety of flora and fauna, the park is a treat for animal lovers and children.",category:"Activity",expense:"$",rating:3,image:"https://karnataka.b-cdn.net/wp-content/uploads/2008/10/Bannerghatta-National-Park-Tiger.jpg")

ThingsToDo.create(place_id:bangalore.id,name:"Lalbagh Botanical Garden",description:"Lalbagh Botanical Garden or shortened Lalbagh, is an old botanical garden in Bengaluru, India. First planned and laid out during the dalavaiship of Hyder Ali and later managed under numerous British Superintendents before Indian Independence. It was responsible for the introduction and propagation of numerous ornamental plants as well as those of economic value",category:"Attraction",expense:"$",rating:4,image:"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_154851008_20200123162547_20200123162603.png")

ThingsToDo.create(place_id:bangalore.id,name:"Bangalore Palace",description:"The Bangalore Palace was the private residence of the royal Wodeyar family. Built to resemble Windsor Castle, this quirky palace is filled with an interesting and eclectic collection of art and paraphernalia from a bygone era. ",category:"Attraction",expense:"$$",rating:4,image:"https://www.makemytrip.com/travel-guide/media/dg_image/bangalore/Bangalore-Palace.jpg")

puts"Seeding done..."