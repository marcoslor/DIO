TENOR_KEY = "U5I4KQ9F3ZGG";
TENOR_BASE_URL = "https://g.tenor.com/v1/search?key=" + TENOR_KEY + "&q=";

function getTenorGifs(query) {
  return fetch(TENOR_BASE_URL + query)
    .then((response) => response.json())
    .then((data) => data.results);
}

const VUE_APP = Vue.createApp({
  computed: {
    randomCategory() {
      return () => {
        KITTY_CATEGORIES = [
          "action",
          "comedy",
          "humor",
          "scifi",
          "romance",
          "drama",
          "fantasy",
        ];
        return KITTY_CATEGORIES[
          Math.floor(Math.random() * KITTY_CATEGORIES.length)
        ];
      };
    },
  },
  mounted() {},
});

// new vue component
VUE_APP.component("content-row-view", {
  props: ["title"],
  template: /*html*/ `
          <div class="content-row-view on-loading on-first-slide">
            <h2>{{ title }}</h2>
            <div class="swiper-row">
              <div class="swiper-control-prev">
                <i class="fas fa-chevron-left"></i>
              </div>
              <div class="swiper-control-next">
                <i class="fas fa-chevron-right"></i>
              </div>
              <div class="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="n in 20">
                    <div class="thumb-size-fix">
                      <div class="thumb"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,

  mounted: function () {
    const swiper = new Swiper(this.$el.querySelector(".swiper"), {
      slidesPerView: 3,
      speed: 400,
      slidesPerGroup: 3,
      loop: false,
      breakpoints: {
        950: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
        1500: {
          slidesPerView: 6,
          slidesPerGroup: 6,
        },
      },
      on: {
        init: function (swiper) {
          swiper.el.parentElement.parentElement.classList.remove("not-loaded");

          let count = 0;
          swiper.el.querySelectorAll(".thumb").forEach((el) => {
            el.style.animationDelay = count + "s";
            count += 0.2;
          });
        },
        realIndexChange: function (swiper) {
          if (swiper.realIndex == 0) {
            swiper.el.parentElement.parentElement.classList.add(
              "on-first-slide"
            );
          } else {
            swiper.el.parentElement.parentElement.classList.remove(
              "on-first-slide"
            );
          }
        },
      },
    });

    this.$el
      .querySelector(".swiper-control-next")
      .addEventListener("click", () => {
        swiper.slideNext();
      });

    this.$el
      .querySelector(".swiper-control-prev")
      .addEventListener("click", () => {
        swiper.slidePrev();
      });

    let popup = document.querySelector("#gif-preview-popup");

    getTenorGifs(this.$props.title).then((data) => {
      this.$el.querySelector(".swiper-wrapper").innerHTML = data
        .map((gif) => {
          return /*html*/ `
                <div class="swiper-slide">
                  <div class="thumb-size-fix">
                    <div class="thumb">
                      <img src="${gif.media[0].tinygif.preview}" />
                    </div>
                  </div>
                </div>
              `;
        })
        .join("");

      swiper.update();
      this.$el.classList.remove("on-loading");
    });
  },
});

VUE_APP.mount("#app");
