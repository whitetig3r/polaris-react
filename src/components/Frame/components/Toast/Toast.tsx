import * as React from 'react';
import {classNames} from '@shopify/react-utilities';

import {Key} from '../../../../types';
import Button from '../../../Button';

import Icon from '../../../Icon';
import KeypressListener from '../../../KeypressListener';
import {ToastProps as Props} from '../../types';

import styles from './Toast.scss';

export const DEFAULT_TOAST_DURATION = 5000;

export default class Toast extends React.Component<Props, never> {
  private timer?: number;

  componentDidUpdate() {
    this.triggerDismissalTimeout();
  }

  componentDidMount() {
    this.triggerDismissalTimeout();
  }

  componentWillUnmount() {
    this.clearDismissalTimeout();
  }

  render() {
    const {content, onDismiss, error, action} = this.props;

    const dismissMarkup = (
      <button type="button" className={styles.CloseButton} onClick={onDismiss}>
        <Icon source="cancel" />
      </button>
    );

    const actionMarkup = action ? (
      <div className={styles.Action}>
        <Button plain monochrome onClick={action.onAction}>
          {action.content}
        </Button>
      </div>
    ) : null;

    const className = classNames(styles.Toast, error && styles.error);

    return (
      <div className={className}>
        <KeypressListener keyCode={Key.Escape} handler={onDismiss} />
        {content}
        {actionMarkup}
        {dismissMarkup}
      </div>
    );
  }

  private clearDismissalTimeout() {
    if (this.timer) {
      window.clearTimeout(this.timer);
    }
  }

  private triggerDismissalTimeout() {
    const {onDismiss, duration = DEFAULT_TOAST_DURATION} = this.props;

    this.clearDismissalTimeout();
    if (onDismiss != null && duration != null) {
      this.timer = window.setTimeout(onDismiss, duration);
    }
  }
}
