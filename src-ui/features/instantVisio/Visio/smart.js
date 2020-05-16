import React, {Component} from 'react';
import {Share,BackHandler} from 'react-native';
import {i18nString} from './../../../global/i18n';

import Dumb from './dumb';

class Smart extends Component {
  constructor(props) {
    super(props);
    this.sharedLink = this.sharedLink.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick() {
    this.props.navigation.navigate('Home');
    return true;
  }

  sharedLink = async () => {
    try {
      const result = await Share.share({
        message: 
        
          `${i18nString('messageShare')}${'https://instantvisio.com/visio/'}${this.props.videoCallIdProps}`,
      },{
        dialogTitle: 'Share Today',
        excludedActivityTypes: [
          'com.apple.mobilenotes.SharingExtension',
          'com.apple.reminders.RemindersEditorExtension'
        ]
      }).then(({action, activityType}) => {
        if(action === Share.dismissedAction) console.log('Share dismissed');
        else console.log('Share successful');
      });
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    return <Dumb {...this.props} sharedLink={this.sharedLink} />;
  }
}

export default Smart;
