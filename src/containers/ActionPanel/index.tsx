import React, { useContext } from 'react';

import { IProps } from './types';

import Levels from './Levels';
import Footer from './Footer';
import PlayButton from '@root/containers/PlayButton';

import { I18nContext } from '@root/i18n';

import s from './styles.scss';

const ActionPanel: React.FC<IProps> = (props) => {
  const { startTime, endTime, level, setStartTime, setLevel, setEndTime } = props;
  const { labels } = useContext(I18nContext);

  return (
    <div className={s.actionPanel}>
      <div>
        <div className={s.playBtn}>
          <PlayButton
            startTime={startTime}
            endTime={endTime}
            setStartTime={setStartTime}
            setEndTime={setEndTime}
          />
        </div>
        <h3 className={s.title}>{labels.general.levels}</h3>
        <Levels level={level} setLevel={setLevel} setStartTime={setStartTime} setEndTime={setEndTime} />
      </div>
      <Footer />
    </div>
  );
};

export default ActionPanel;
