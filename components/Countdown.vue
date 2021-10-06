<template>
  <div class='text-white'>
    <div v-if='enableCountDown'>
      <client-only>
        <FlipCountdown :deadline='openDateString'
                       :labels="{ days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' }" />
      </client-only>
    </div>
    <div v-else>少々お待ちください...</div>
    <div class='scrolldown'><span>Scroll</span></div>
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'
import dayjs from 'dayjs'
// 以降の処理を日本時間基準に切り替える
dayjs.extend(require('dayjs/plugin/timezone'))
dayjs.extend(require('dayjs/plugin/utc'))
dayjs.tz.setDefault('Asia/Tokyo')
let openDateInput = '2021-11-07 00:00:00'
const openDateEnv = process.env.OPEN_DATE
// nullを入れないと現在日時になってしまう
const isEnvValid = dayjs(openDateEnv ?? null).isValid()
// dayjsが環境変数を解釈できない場合、ハードコーディングされた日時を使う
if (isEnvValid) {
  openDateInput = openDateEnv
}

export default {
  name: 'Countdown',
  components: { FlipCountdown },

  data() {
    const openDate = dayjs(openDateInput)

    // オープンまでのmsはマイナスになるが、以下の演算がわかりにくいためプラスにする
    const milliSecondsUntilOpen = dayjs().diff(openDate, false) * -1

    // カウトダウンタイマーのために文字列化する必要がある
    // 詳細: https://github.com/philipjkim/vue2-flip-countdown
    const openDateString = openDate.format('YYYY-MM-DD HH:mm:ss')
    return {
      openDateString,
      milliSecondsUntilOpen,
      enableCountDown: milliSecondsUntilOpen > 0
    }
  },
  mounted() {
    this.warnAboutEnv()
  },
  methods: {
    warnAboutEnv() {
      if (isEnvValid) {
        console.debug('オープン日時を環境変数から設定しました')
      } else {
        openDateEnv ? console.debug(`環境変数はYYYY-MM-DD HH:mm:ssで設定してください: ${openDateEnv}`) : console.debug('環境変数が設定されていません')
      }
      console.debug(`オープン日時: ${this.openDateString}`)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');

* {
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  letter-spacing: 1px;
}

/* 色を修正 */
.flip-card__top,
.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__back::before,
.flip-card__back::after {
  color: #fff !important;
  background: transparent !important;
  border-width: 0px !important;
  font-weight: 200 !important;
}

/* 単位の文字 */
.flip-clock__slot {
  color: #fff !important;
}

/* パタパタを消す */
.flip .flip-card__top,
.flip .flip-card__top-4digits,
.flip .flip-card__bottom,
.flip .flip-card__bottom-4digits {
  animation: none !important;
}

/* 余計な後ろの数字を消す */
.flip .flip-card__back,
.flip .flip-card__back-bottom {
  display: none !important;
}

.scrolldown {
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 50px;
}

.scrolldown span {
  position: absolute;
  left: -22px;
  top: -28px;
  color: #FFF;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
}

.scrolldown::after {
  content: "";
  position: absolute;
  top: 0;
  width: 1px;
  height: 500px;
  background: #eee;
  animation: pathmove 1.4s ease-in-out infinite;
  opacity: 0;
}

@keyframes pathmove {
  0% {
    height: 0;
    top: 0;
    opacity: 0;
  }
  30% {
    height: 30px;
    opacity: 1;
  }
  100% {
    height: 0;
    top: 50px;
    opacity: 0;
  }
}
</style>
