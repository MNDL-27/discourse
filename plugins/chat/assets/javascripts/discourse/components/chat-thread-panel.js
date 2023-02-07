import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ChatThreadPanel extends Component {
  @service siteSettings;
  @service currentUser;
  @service chat;
  @service router;

  @action
  closeThread() {
    return this.router.transitionTo("chat.channel", {
      channelId: this.chat.activeChannel.id,
    });
  }
}
