/**
 * @format
 */

import * as React from 'react';
import Teste from '../components/teste';
import {render} from '@testing-library/react';

// Note: test renderer must be required after react-native.

test('Header contains correct text', () => {
  render(<Teste />);
});
