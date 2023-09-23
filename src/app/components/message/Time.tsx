import React from 'react';
import { Text, as } from 'folds';
import { timeDayMonYear, timeHourMinute, today, yesterday } from '../../utils/time';

export type TimeProps = {
  compact?: boolean;
  ts: number;
};

export const Time = as<'span', TimeProps>(({ compact, ts, ...props }, ref) => {
  let time = '';
  if (compact) {
    time = timeHourMinute(ts);
  } else if (today(ts)) {
    time = timeHourMinute(ts);
  } else if (yesterday(ts)) {
    time = `Yesterday ${timeHourMinute(ts)}`;
  } else {
    time = `${timeDayMonYear(ts)} ${timeHourMinute(ts)}`;
  }

  return (
    <Text style={{ flexShrink: 0 }} size="T200" priority="300" {...props} ref={ref}>
      {time}
    </Text>
  );
});
