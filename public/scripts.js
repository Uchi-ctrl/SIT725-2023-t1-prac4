const cardList = [
  {
    title: "Kitten 2",
    image: "images/pexels-pixabay-45201.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "images/pexels-pixabay-416160.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3",
  },
];

const clickMe = () => {
  console.log("clickMe clicked");
};

const addCards = (items) => {
  console.log(items);
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.desciption +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

const submitForm = () => {
  let formData = {};
  formData.title = $("#title").val();
  formData.image = $("#image").val();
  formData.link = $("#link").val();
  formData.description = $("#description").val();

  console.log("Form Data: ", formData);
  addCat(formData);
};

const addCat = (cat) => {
  $.ajax({
    url: "api/cats",
    data: cat,
    type: "POST",
    success: (result) => {
      alert(result, message);
      location.reload();
    },
  });
};

const getCats = () => {
  $.get("/api/cats", (response) => {
    if (response.statuscode === 200) {
      addCards(response.data);
    }
  });
};

$(document).ready(function () {
  $(".materialboxed"), materialbox();
  $(".modal").modal();

  getCats();

  $("#formSubmit").click(() => {
    submitForm();
  });
});
