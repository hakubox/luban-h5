export default {
  functional: true,
  props: {
    faIcon: {
      required: true,
      type: String,
      default: ''
    },
    /** 展示图片 */
    img: {
      required: true,
      type: String,
      default: ''
    },
    title: {
      required: true,
      type: String
    },
    clickFn: {
      required: false,
      type: Function,
      default: () => {}
    },
    mousedownFn: {
      required: false,
      type: Function,
      default: () => {}
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render: (h, { props, listeners, slots }) => {
    const onClick = props.disabled ? function () {} : props.clickFn;

    /** 组件卡片框显示DOM */
    let cardContent;
    if (props.img) {
      cardContent = <img onDragstart={e => e.preventDefault()} src={'/img/components/' + props.img} />
    } else if (props.faIcon) {
      cardContent = <i class={['shortcut-icon', 'fa', `fa-${props.faIcon}`]} aria-hidden='true' />
    } else {
      cardContent = <div class="shortcut-card-blank"><img onDragstart={e => e.preventDefault()} src="/img/blank.png" /><span>请添加图片 / Icon</span></div>
    }

    return (
      <div class="shortcut-card" onClick={onClick} onMousedown={props.mousedownFn}>
        <div class="shortcut-card-content">
          {cardContent}
        </div>
        <span class="shortcut-card-title">{props.title}</span>
      </div>
      // <button
      //   class="shortcut-button"
      //   onClick={props.clickFn}
      //   onMousedown={props.mousedownFn}
      //   disabled={props.disabled}
      // >
      //   <i
      //     class={['shortcut-icon', 'fa', `fa-${props.faIcon}`]}
      //     aria-hidden='true'
      //   />
      //   <span>{ props.title }</span>
      // </button>
    )
  }
}
