import React from 'react';

import { IProps } from './types';

import Toast from 'react-bootstrap/Toast';

import s from './styles.scss';

import labels from '@root/i18n';

const QuickClick: React.FC<IProps> = ({ isShown, toggleIsShown }) => {
  if (!isShown) return null;

  return (
    <Toast show={isShown} autohide animation delay={60000} onClose={() => toggleIsShown(false)}>
      <Toast.Header>
        <strong className="mr-auto">{labels.toasters.notSoFast.title}</strong>
      </Toast.Header>
      <Toast.Body>
        <b className={s.policemanIcon}>👮‍♂️</b> {labels.toasters.notSoFast.body}
      </Toast.Body>
    </Toast>
  );
};

export default QuickClick;
