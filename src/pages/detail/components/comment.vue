<template>
  <div  class="comment">
    <div   class="comment-info border-bottom">
      <div  class="comment-count">
        用户评价(39918)
      </div>
      <div  class="comment-degree">
        97.4%
        <span >满意</span>
      </div>
    </div>
    <div   class="comment-box">
      <div  class="item">
        <div  class="comment-header">
        <div  class="avatar-img-box">
          <img class="img-width"  src="//s1.mi-img.com/mfsv2/avatar/s010/p01U2R4uJLxK/3AzikDxYDnDWTP_90.jpg">
        </div>
        <div  class="user-info flex">
          <p  class="name">小一</p>
          <p  class="comment-date">2018-03-15</p>
        </div>
        <div  class="like">
        <span >超爱</span>
        </div>
      </div>
        <div  class="comment-content">
          <div class="text">说好的妹子在那里</div>
          <div   class="photos">
            <img class="comment-img"  src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/331d64be883e67e4314297a7b487f780.webp" lazy="loaded">
          </div>
        </div>
        <div    class="comment-reply">
          <div    class="comment-replay-item official">
            <div    class="text">
              <div    class="avatar">
              </div>
              <span class="span"  >官方回复：</span>
              组团偷猫，去的扣1！~  现在统计人数1/10~感谢您对小米的支持(＝^ω^＝)
            </div>
          </div>
          <div    class="comment-replay-item">
            <div    class="text">
              <div    class="avatar">
                <img    src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/9bd716bcdd5d6e4968d3adc3c5b6353b.jpg">
              </div>
              <span   >
                无敌是多么寂寞：
              </span>
              1
            </div>
          </div>
          <div    class="comment-replay-item">
            <div    class="text">
              <div    class="avatar">
                <img    src="https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01vGeqFafqa/vHzU7NBMwKbzQX.jpg">
              </div><span   >执念：</span>(6/10)
            </div>
          </div><div    class="comment-replay-item">
          <div    class="text"><div    class="avatar">
            <img    src="https://s1.mi-img.com/mfsv2/avatar/s010/p01mJDaOeh81/t4O2F2ofGhCKFh.jpg">
          </div>
            <span   >人生如梦：</span>组团去看猫
          </div>
        </div>
          <div  class="more border-top">查看全部16条评论</div>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    commitContent: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/common.styl"
  .comment
    text-align: left;
    background: #fff;
    margin-top: .16rem
    .comment-info
      display: flex
      justify-content space-between
      align-items center
      padding: .32rem 0;
      margin: 0 .32rem;
      font-size: .24rem
      padding-right: .4rem
      .comment-count
        color: rgba(0,0,0,.54)
        flex 1 1 auto
      .comment-degree
        flex 1 1 auto
        color: #ff6700;
        text-align: right;
    .comment-box
      background: #fff;
      text-align: left;
      .item
        padding: .24rem .32rem .32rem;
        .comment-header
          display: flex;
          align-items: center;
          flex: 1 1 auto;
          .avatar-img-box
            margin-right: .24rem;
            width: .8rem;
            height: .8rem;
            overflow: hidden;
            border-radius: 100%;
            .img-width
              width 100%
          .user-info
            flex: 1 1 auto
            .name
              font-size: .26rem
            .comment-date
              margin-top: .05rem;
              color: rgba(0,0,0,.54);
            .like
              padding-left: .5rem;
              width: 1rem;
              height: .36rem;
              line-height: .36rem;
              color: #ff6700;
        .comment-content
          .text
            padding: .12rem 0;
            line-height: 1.5em;
            font-size: .26rem;
          .photos
            text-align: center
            margin-bottom: .12rem;
            .comment-img
              height: 3rem;
              width: auto;
              margin: 0 .08rem .08rem 0;
        .comment-reply
          padding: .16rem;
          background: #f6f6f6
          .comment-replay-item
            overflow: hidden;
            padding: .05rem 0;
            .text
              font-size: .22rem;
              line-height: 1.5em;
            .avatar
              float: left;
              width: .32rem;
              height: .32rem;
              overflow: hidden;
              border-radius: 100%;
              margin-right: .2rem;
              background-color: transparent
              background-image: url(https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/9bd716bcdd5d6e4968d3adc3c5b6353b.jpg)
              background-repeat no-repeat
              background-position 50%;
              background-size: cover;
              img
                width 100%
            .span
                color #ff6700
          .more
            position: relative
            font-size: .28rem;
            color: #ff6700;
            text-align: center;
            margin-top: .24rem;
            padding: .16rem 0 .16rem;
            &:after
              height .16rem
              width .16rem
</style>
