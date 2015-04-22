if (Meteor.isClient) {
  Template.expressions.helpers({
    name: function () {
      return "<strong>Michael</strong>";
    }
  });
  Template.partialsUserProfile.helpers({
    name: 'Jim',
    image: '/jim-profile-thumb.jpg'
  });
  Template.dynamicPartials.helpers({
    templateNameLeft: function () {
      return "partialsUserProfile";
    },
    templateNameRight: function () {
      return "partialsNewsStream";
    }
  });
  Template.ifBlock.helpers({
    image: function () {
      //return false;
      return "cookies.jpg";
    }
  });
  Template.eachBlock.helpers({
    skills: function () {
      return ['Meteor', 'Sailing', 'Cooking'];
    }
  });
  Template.withBlock.helpers({
    profileJim: function () {
      var jim = {
        name: 'Jim "Sailor Ripley" Johnson',
        skills: ['Meteor', 'Sailing', 'Cooking'],
      };
      return jim;
    }
  });

}

if (Meteor.isServer) {

}