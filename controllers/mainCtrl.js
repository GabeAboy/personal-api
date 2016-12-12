
var user = require('../user.js');
var userSkills = require('../skills.js');
var secret = require('../controllers/secrets.js');
module.exports = {


  getName: function(req,res) {
    res.status(200).json({name:user.name});
  },
  getLocation:function(req,res) {
    res.status(200).json({location: user.location});
  },
  getOccupation:function(req,res) {
    res.status(200).json({occupations: user.occupations});
  },
  getLatestOccupation:function(req,res) {
    res.status(200).json({occupations: user.occupations[user.occupations.length-1]});
  },
  getHobbies:function(req,res) {
      res.status(200).json({hobbies:user.hobbies});
  },
  getHobbiesByType:function(req,res) {
    res.status(200).json({hobbies:user.hobbies.filter(function(tye) {
        return req.params.type === tye.type;})
    });
  },
  getFamily:function(req,res) {
    res.status(200).json({family:user.family});
  },
  getFamilyGender:function(req,res) {
    res.status(200).json({family:user.family.filter(function(fam) {
      return req.params.gender === fam.gender;
    })
  });
},
getRestaurants:function(req,res) {
  if (req.query.rating) {
    res.status(200).json({restaurants:user.restaurants.filter(function(rest) {
        return req.query.rating <= rest.rating;
      })
    });
  }
  else {
    res.status(200).json({restaurants:user.restaurants});
  }
},
getRestaurantsByName:function(req,res) {
  if (req.query.rating) {
    res.status(200).json({restaurants:user.restaurants.filter(function(rest) {
        return req.query.rating <= rest.rating && req.params.name === rest.name;
      })
    });
  }
  else {
    res.status(200).json({restaurants:user.restaurants.filter(function(rest) {
        return req.params.name === rest.name;
      })
    });
  }
 },
 putName:function(req,res) {
   user.name = req.body.name;
   res.status(200).json(user);
 },
 putLocation:function(req,res) {
   user.location = req.body.location;
   res.status(200).json(user);
 },
 postHobbie:function(req,res) {
   console.log(req.body);
   user.hobbies.push(req.body.hobbie);
   res.status(200).json(user);
 },
 postOccupation:function(req,res) {
   user.occupations = req.body.occupation;
   res.status(200).json(user);
 },
 postFamily:function(req,res) {
   user.family = req.body.family;
   res.status(200).json(user);
 },
 postRestaurants:function(req,res) {
   user.restaurants = req.body.restaurant;
   res.status(200).json(user);
 },
 getSkills:function(req,res) {
   //console.log(req);
   //res.status(200).json({skills:userSkills});
   if (req.query.experience) {
     res.status(200).json({skill:userSkills.filter(function(exp) {
         return req.query.experience === exp.experience;
       })
     });
   }
   else {
     res.status(200).json({skill:userSkills});
   }
 },
 postSkill:function (req,res,next) {
   userSkills.push(req.body);
   res.json({skills:userSkills});
 },
 secret:function(req,res,next) {
   var userName = 'Gabriel';
   var pin = "450";
   if(req.params.username === userName && req.params.pin === pin){
     res.status(200).json({secrets: secret});
   }
   else{
     res.status(200).json({Not:userName});
   }
  //  res.status(200).json({})
 }
};
