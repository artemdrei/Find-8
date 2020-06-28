import React, { useContext, useEffect, useState } from 'react';

import { IProps } from './types';
import { data } from './data';

import { getStorage, setStorage } from '@root/utils';

import Select from '@root/components/Select';

import { I18nContext } from '@root/i18n';

const Field: React.FC<IProps> = ({ field, changeField }) => {
  const [value, changeValue] = useState('');
  console.log('field:', field);
  const { labels } = useContext(I18nContext);

  useEffect(() => {
    const value = `${field.defaultValue},${field.seekedValue}`;
    changeValue(value);
  }, [field.defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value.split(',');
    const defaultValue = value[0];
    const seekedValue = value[1];

    const storage = getStorage();
    const updatedData = { ...storage, field: { ...storage.field, defaultValue, seekedValue } };
    setStorage(updatedData);

    changeField((prev) => ({ ...prev, defaultValue, seekedValue }));
  };

  const mappedData = data.map((option) => ({
    ...option,
    label: option.label.replace('{{from}}', labels.general.from),
  }));

  return (
    <div>
      <Select
        variant="outline"
        name="fieldChanger"
        ariaLabel="fieldChanger"
        data={mappedData}
        defaultValue={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Field;
