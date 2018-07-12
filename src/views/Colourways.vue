<template>
  <div
    id="skrollr-body"
    class="colourways">
    <!-- Dummy Text -->
    <div class="dummy-text">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odio, quia in eveniet
      ducimus tempore alias sequi molestiae animi nobis ullam debitis consectetur iure! Sapiente
      tenetur voluptas neque nobis numquam architecto quaerat aliquid, veritatis illum doloremque
      vitae explicabo. Sed, qui.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odio, quia in eveniet
      ducimus tempore alias sequi molestiae animi nobis ullam debitis consectetur iure! Sapiente
      tenetur voluptas neque nobis numquam architecto quaerat aliquid, veritatis illum doloremque
      vitae explicabo. Sed, qui.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odio, quia in eveniet
      ducimus tempore alias sequi molestiae animi nobis ullam debitis consectetur iure! Sapiente
      tenetur voluptas neque nobis numquam architecto quaerat aliquid, veritatis illum doloremque
      vitae explicabo. Sed, qui.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odio, quia in eveniet
      ducimus tempore alias sequi molestiae animi nobis ullam debitis consectetur iure! Sapiente
      tenetur voluptas neque nobis numquam architecto quaerat aliquid, veritatis illum doloremque
      vitae explicabo. Sed, qui.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odio, quia in eveniet
      ducimus tempore alias sequi molestiae animi nobis ullam debitis consectetur iure! Sapiente
      tenetur voluptas neque nobis numquam architecto quaerat aliquid, veritatis illum doloremque
      vitae explicabo. Sed, qui.</p>
    </div>
    <!-- Big Image / Info -->
    <div class="colourways__info">
      <!-- Big-image -->
      <span
        class="colourways__info__img-holder"
        data-bottom-top="transform:translate3d(0, 100%, 0); opacity:0;"
        data--500-bottom="transform:translate3d(0, 0, 0); opacity: 1;">
        <img
          src="//via.placeholder.com/350x350"
          alt="big-image">
      </span>
      <!-- Text -->
      <div class="colourways__info__text">
        <h4>Deerupt</h4>
        <p>£55.99</p>
        <div class="quick-buy"/>
      </div>
      <!-- List -->
      <ul
        class="colourways__info__list"
        data-bottom-top="transform:translate3d(0, 100%, 0)"
        data--800-bottom="transform:translate3d(0, 0, 0)">
        <li>
          <img
            src="//via.placeholder.com/70x70"
            alt="colourways">
        </li>
        <li>
          <img
            src="//via.placeholder.com/70x70"
            alt="colourways">
        </li>
        <li>
          <img
            src="//via.placeholder.com/70x70"
            alt="colourways">
        </li>
        <li>
          <img
            src="//via.placeholder.com/70x70"
            alt="colourways">
        </li>
      </ul>
    </div>
    <!-- Dummy Text -->
    <div class="dummy-text">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odio, quia in eveniet
      ducimus tempore alias sequi molestiae animi nobis ullam debitis consectetur iure! Sapiente
      tenetur voluptas neque nobis numquam architecto quaerat aliquid, veritatis illum doloremque
      vitae explicabo. Sed, qui.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odio, quia in eveniet
      ducimus tempore alias sequi molestiae animi nobis ullam debitis consectetur iure! Sapiente
      tenetur voluptas neque nobis numquam architecto quaerat aliquid, veritatis illum doloremque
      vitae explicabo. Sed, qui.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odio, quia in eveniet
      ducimus tempore alias sequi molestiae animi nobis ullam debitis consectetur iure! Sapiente
      tenetur voluptas neque nobis numquam architecto quaerat aliquid, veritatis illum doloremque
      vitae explicabo. Sed, qui.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odio, quia in eveniet
      ducimus tempore alias sequi molestiae animi nobis ullam debitis consectetur iure! Sapiente
      tenetur voluptas neque nobis numquam architecto quaerat aliquid, veritatis illum doloremque
      vitae explicabo. Sed, qui.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos odio, quia in eveniet
      ducimus tempore alias sequi molestiae animi nobis ullam debitis consectetur iure! Sapiente
      tenetur voluptas neque nobis numquam architecto quaerat aliquid, veritatis illum doloremque
      vitae explicabo. Sed, qui.</p>
    </div>
  </div>
</template>

<script>
import Skrollr from 'skrollr';

export default {
  name: 'Colourways',
  mounted() {
    Skrollr.init({
      forceHeight: true,
    });
  },
};
</script>

<style lang="scss" scoped>
  .colourways {
    background-color: #333;
    color: #fff;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    margin: 0 auto;
    max-width: 1250px;
    padding: 1rem;

    &__info {
      // background: hotpink;
      display: flex;
      flex-direction: column;
      max-width: 750px;
      overflow: hidden;
      position: relative;

      &__img-holder {
        width: 100%;
        display: block;
        padding-bottom: 100px;

        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }

      &__text {
        position: absolute;
        right: 0;
        top: 50%;
        // margin-top: -50px;
        margin-right: 1rem;

        .quick-buy {
          width: 30px;
          height: 30px;
          position: relative;
          left: 50%;
          margin-left: -10px;
          top: 0.5rem;
          border: 2px solid orangered;
          border-radius: 50%;
          transition: all 0.2s ease-in-out;

          &:hover {
            background-color: orangered;
          }
        }

        h4 {
          font-size: 1rem;
        }

        p {
          font-size: 0.8rem;
          margin-top: 0.5rem;
          margin-bottom: 0;
        }
      }

      &__list {
        list-style: none;
        display: flex;
        padding: 0;
        margin-top: 0.5rem;
        margin-bottom: 0;
        width: 100%;
        align-items: center;
        flex-flow: row wrap;
        justify-content: flex-start;
        transition: transform 0.5ms linear;
        position: absolute;
        bottom: 0;

        li {
          margin: 0 0.2rem;
          flex: 0 0 23%;
        }
      }
    }
  }

  .dummy-text p {
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
