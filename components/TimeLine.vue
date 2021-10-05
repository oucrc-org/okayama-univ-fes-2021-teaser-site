<template>
  <section class='box bg-themeColor max-w-3xl mx-auto'>
    <p class='text-secondaryColor text-right font-bold tracking-widest pr-6 pt-10'>2021年 岡山大学祭テーマ</p>
    <h1 class='text-white text-4xl text-right tracking-extraWidest mt-2 pr-6'>笑顔満祭岡大祭</h1>
    <p class='text-white text-right text-base tracking-widest mt-3 pr-6'>〜心機一転しちゃいな祭〜</p>
    <ul class='timeline'>
      <li v-for='m in 3' :key='m'>
        <dl>
          <dt class='text-themeColor font-medium'>11/7（土）</dt>
          <h2 class='text-themeColor text-2xl tracking-widest font-bold mt-1'>プロコンサート</h2>
          <dd class='text-sm text-gray-500 mt-3'>
            テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
          </dd>
        </dl>
        <span class='border-line'></span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TimeLine',
  mounted() {
    //線が伸びるための設定を関数でまとめる
    function ScrollTimelineAnime() {
      $('.timeline li').each(function() {// それぞれのli要素の
        var elemPos = $(this).offset().top// 上からの高さ取得
        var scroll = $(window).scrollTop()// スクロール値取得
        var windowHeight = $(window).height()// windowの高さ取得
        var startPoint = windowHeight * 0.4 //線をスタートさせる位置を指定※レイアウトによって調整してください
        if (scroll >= elemPos - windowHeight - startPoint) {
          var H = $(this).outerHeight(true)//liの余白と高さを含めた数値を取得
          //スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
          var percent = (scroll + startPoint - elemPos) / (H / 2) * 100//liの余白と高さの半分で線を100％に伸ばす

          // 100% を超えたらずっと100%を入れ続ける
          if (percent > 100) {
            percent = 100
          }
          // ボーダーの長さをセット
          $(this).children('.border-line').css({
            height: percent + '%' //CSSでパーセント指定
          })
        }
      })
    }

// 画面をスクロールをしたら動かしたい場合の記述
    $(window).on('scroll', function() {
      ScrollTimelineAnime()// 線が伸びる関数を呼ぶ
    })

// ページが読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function() {
      ScrollTimelineAnime()// 線が伸びる関数を呼ぶ
    })
  }
}
</script>

<style scoped>
/*タイムライン全体の設定*/
.timeline {
  background: #FFFFFF;
  width: 92%;
  margin: 36px 0;
  padding: 70px 30px 0;
}

.timeline li {
  /*線の起点とするためrelativeを設定*/
  position: relative;
  list-style: none;
  padding: 0 0 20px 0;
}

.timeline dl {
  margin: 0 0 20px 3em;
  position: relative;
  top: -22px;
}

.timeline dd strong {
  display: block;
  padding: 10px 0;
}

/*絶対配置で線を設定*/
.border-line {
  /*線の位置*/
  position: absolute;
  left: 0.4em;
  top: 0;
  width: 2px; /*線の太さ*/
  height: 0; /*はじめは高さを0に*/
  background: #66BEFF;
}

/*タイムラインの見出し横の丸の位置と形状*/
.timeline li::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  background: #0071C5;
  border-radius: 50%;
}
</style>
