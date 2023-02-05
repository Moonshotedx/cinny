/* eslint-disable import/first */
import React from 'react';
import ReactDom from 'react-dom';
import { enableMapSet } from 'immer';
import '@fontsource/inter/variable.css';
import 'folds/dist/style.css';
import { lightTheme, configClass, config, varsClass } from 'folds';

enableMapSet();

import './font';
import './index.scss';

import settings from './client/state/settings';

import App from './app/pages/App';

document.body.classList.add(lightTheme, configClass, varsClass);
document.body.style.fontFamily = config.font.Inter;

settings.applyTheme();

ReactDom.render(<App />, document.getElementById('root'));
