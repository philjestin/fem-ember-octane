import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';

export const ALL_TEAMS = [
  {
    "id": "linkedin",
    "name": "LinkedIn",
    "order": 2,
    "iconUrl": "https://gravatar.com/avatar/0ca1be2eaded508606982feb9fea8a2b?s=200&d=https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png"
  },
  {
    "id": "ms",
    "name": "Microsoft",
    "order": 3,
    "iconUrl": "https://gravatar.com/avatar/0ca1be2eaded508606982feb9fea8a2b?s=200&d=https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png"
  },
  {
    "id": "avengers",
    "name": "Avengers",
    "order": 4,
    "iconUrl": "https://pbs.twimg.com/profile_images/1113336188956434432/7XUkmgrG_400x400.jpg"
  },
  {
    "id": "angrycat",
    "name": "Angry Cat",
    "order": 5,
    "iconUrl": "https://scontent-ort2-2.cdninstagram.com/vp/3ba32467db3879cb511b8fe66aebea28/5D744C59/t51.2885-19/s320x320/31007051_1785230941534197_6444464665186533376_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com"
  },
  {
    "id": "javascript",
    "name": "Javascript",
    "order": 6,
    "iconUrl": "https://pbs.twimg.com/profile_images/634644295618658304/UuIqtEJ8_400x400.png"
  }
];

export default class TeamsRoute extends Route {
  /**
   * @type {AuthService}
   */
  @service auth

  async beforeModel(transition) {
    await super.beforeModel(transition);

    if (!this.auth.currentUserId) {
      this.transitionTo('login');
    }
  }

  async model() {
    return ALL_TEAMS;
  }
}
