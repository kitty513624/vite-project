import { it, expect, assert, describe } from 'vitest';

// const isDev = process.env.NODE_ENV === 'development'
// const myAsyncFunc = () => new Promise(resolve => resolve(1))

// 测试的报告中将显示一个记录
// it.todo('测试的报告中将显示一个记录')

const stock = {
    type: 'apples',
    count: 13
};
const getApples = () => 3;
const apples = () => {
    return null;
};
const actual = 'stock';
// const stocks = new Stocks()
const stockBill = {
    type: 'apples',
    count: 13
};
const stockMary = {
    type: 'apples',
    count: 13
};

it('test input to equal', () => {
    expect(stock.type).toBe('apples');
    expect(stock.count).toBe(13);
});
it('stocks are the same', () => {
    const refStock = stock; // 相同的索引
    expect(stock).toBe(refStock);
});
it('toBeCloseTo', () => {
    expect(0.1 + 0.2).not.toBeCloseTo(0.3, 50);
});
it('toBeDefined', () => {
    expect(getApples()).toBeDefined();
});
it('toBeUndefined', () => {
    expect(getApples()).not.toBeUndefined();
});
it('toBeNull', () => {
    expect(apples()).toBeNull();
});
it('toBeTypeOf', () => {
    expect(actual).toBeTypeOf('string');
});
// 未创建类
it.skip('toBeInstanceOf', () => {
    expect(stocks).toBeTypeOf(Stocks);
});

it('toEqual', () => {
    expect(stockBill).toEqual(stockMary);
});
