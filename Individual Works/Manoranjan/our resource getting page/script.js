/*
  * Inspired from - https://dribbble.com/shots/13926352-E-Book-Page-Swipe-Animaiton
  * Do check Saptarshi Prakash's bio for more awesome designs
*/

const $pages = $('.pages'),
      $cover = $('.cover'),
      $book = $(".book"),
      $hint = $(".hint"),
      timeline = new TimelineLite({ paused: true, reversed: true }),
      transitionSpeed = 1;

console.log($pages, $cover, $book, $hint); // Debugging statement

timeline.to(".bend", 0, { width: "0" }, 0)
        .to(".book", 0, { width: "100%", height: "100%"}, 0)
        .to(".cover", transitionSpeed, { className: "+=active", ease: Ease.easeIn, onComplete: () => {
          $pages.removeClass("hide");
          $cover.addClass("hide");
        } }, 0)
        .to(".content-inner", transitionSpeed, { opacity: 1 }, transitionSpeed);

$cover.on("click", function(){  
  $hint.text("* Use the corners to turn the page");
  timeline.play();
  $(".content").addClass("active");
  $pages.turn({
    // Add the missing closing brace here
  });
});