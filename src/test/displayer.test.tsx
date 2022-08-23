import { assert, describe, it } from 'vitest';

import { render, fireEvent } from '@testing-library/react';
import { Displayer } from '../displayer';

/**
 * 测试代码遵循3个规范：
 * Arrange 测试前的准备，这里要先把组件渲染了
 * Act 测试行为，这里模仿点击按钮的行为
 * Assert 测试断言，这里要检查点击按钮后组件是否达到预期的效果
 */
describe('test Demo', () => {
    it('load and click gray button', () => {
        // Arrange
        const { getByTestId, queryByRole } = render(<Displayer name="test name" content="test content" />);
        // Act
        fireEvent.click(getByTestId('gray'));
        // Assert
        const body = queryByRole('displayer-content');
        assert.isNull(body);
    });
    // it('load and click down button', () => {});
});
