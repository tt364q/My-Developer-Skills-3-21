//IPO - Input Process Output

// Constants and Variables (State)

let skills;

// Cached Element References

const $button = $("button");
const $ul = $("ul");
const $input = $("input");

//Event Listeners

$("button").on("click", handleAddSkill);
$("ul").on("click", "span", function handleDelete() {
  $(this)
    .closest("li")
    .fadeOut(1000, function () {
      $(this).remove();
    });
});

// Functions

init();

function init() {
  skills = [];
  render();
}

function handleAddSkill() {
  const skill = $input.val();
  if (skill) {
    const $skill = $(`<li><span>X</span>${skill}</li>`);
    skills.push($skill);
    $input.val("");
    render();
  } else return;
}

// function handleDelete() {
//   $(this)
//     .closest("li")
//     .fadeOut(1000, function () {});
// }

function render() {
  if (!skills.length) $ul.css("margin-bottom", "30px");
  else $ul.css("margin-bottom", "0px");
  $ul.html(skills);
}
