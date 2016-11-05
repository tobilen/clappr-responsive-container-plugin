import {UIContainerPlugin, PlayerInfo, Mediator, Styler, Events, template, $} from 'clappr'

export default class ResponsiveContainer extends UIContainerPlugin {
  get name() { return 'responsive_container' }

  constructor(container) {
    super(container)
    this.playerInfo = PlayerInfo.getInstance(this.options.playerId)
    this.playerWrapper = this.playerInfo.options.parentElement
  }

  bindEvents() {
    $(window).resize(() => {
      setTimeout(this._onResize(), 500)
    })
  }

  _onResize() {
    this.resizeByWidth(this.playerWrapper.clientWidth)
  }

  resizeByWidth(newWidth) {
    let calculatedHeight = Math.floor(this.options.height / this.options.width * newWidth)
    this.playerInfo.currentSize = {width: newWidth, height: calculatedHeight}
    this.triggerResize(this.playerInfo.currentSize)
  }

  triggerResize(newSize) {
    //should initiate resizing. doesnt though, so we bypass and mutate directly with jq
    Mediator.trigger(`${this.options.playerId}:${Events.PLAYER_RESIZE}`, newSize)
    let $playerDiv = $(this.playerWrapper).children("[data-player]")
    $playerDiv.width(newSize.width)
    $playerDiv.height(newSize.height)
  }
}