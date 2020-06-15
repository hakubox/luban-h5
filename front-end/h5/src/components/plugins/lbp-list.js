// https://github.com/luban-h5-components/plugin-common-props
import './styles/list.scss'
import PropTypes from '@luban-h5/plugin-common-props'

export default {
  render () {
    const {
    } = this;
    const data  = [
      { title: '标题A', author: '箱子', date: '2020-01-01', content: '内容内容内容内容内容内容内容内容内容内容内容内容' },
      { title: '标题B', author: '箱子', date: '2020-01-02', content: '内容内容内容内容内容内容内容内容' },
      { title: '标题C', author: '箱子', date: '2020-01-03', content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容' },
    ];

    const style = {
      width: this.tableWidth ? (this.tableWidth + 'px') : '100%'
    };

    return <div class={'lbp-list ' + this.className}>
      {
        data.map(i => (
          <div class={'lbp-list-item'}>
            <h2 class="lbp-list-item-title">{i.title}</h2>
            <p class="lbp-list-item-content">{i.content}</p>
            <ul class="lbp-list-item-tools">
              <li>{i.author}</li>
              <li>{i.date}</li>
            </ul>
          </div>
        ))
      }
    </div>
  },
  extra: {
    defaultStyle: {
      width: 300,
      height: 150
    }
  },
  name: 'lbp-table',
  props: {
    className: PropTypes.string({ defaultValue: 'default-table-template1', label: '类样式', visible: false }),
  },
  watch: {
  },
  mounted () {
  }
}
