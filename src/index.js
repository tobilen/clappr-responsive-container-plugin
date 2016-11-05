import {UIContainerPlugin, Styler, Events, template, $} from 'clappr'

export default class ResponsiveContainer extends UIContainerPlugin {
  get name() { return 'responsive_container' }

  constructor(container) {
    super(container)
  }

  bindEvents() {
    this.listenTo(this.container, Events.CONTAINER_CLICK, this._onClick)
  }

  _onClick() {
    if (this.container.getPlaybackType() !== Playback.LIVE || this.container.isDvrEnabled()) {
      if (this.container.isPlaying()) {
        this.container.pause()
      } else {
        this.container.play()
      }
    }
  }
}