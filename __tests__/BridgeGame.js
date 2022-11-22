const BridgeGame = require('../src/BridgeGame');

describe('BridgeGame 클래스 테스트', () => {
  const initBridgeGame = (directions) => new BridgeGame(directions);

  test('사용자(UD)는 다리(UDD)를 더 이동 할 수 있다.', () => {
    const bridgeGame = initBridgeGame(['U', 'D', 'D']);
    bridgeGame.move('U');
    bridgeGame.move('D');

    expect(bridgeGame.isMovable()).toBe(true);
  });

  test('사용자(UU)는 다리(UDD)를 더 이동 할 수 없다.', () => {
    const bridgeGame = initBridgeGame(['U', 'D', 'D']);
    bridgeGame.move('U');
    bridgeGame.move('U');

    expect(bridgeGame.isMovable()).toBe(false);
  });

  test('사용자(UDD)가 다리(UDD)를 다 건너면 더이상 이동 할 수 없다.', () => {
    const bridgeGame = initBridgeGame(['U', 'D', 'D']);
    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('D');

    expect(bridgeGame.isMovable()).toBe(false);
  });

  test('사용자가 다리를 다 건너면 성공이다.', () => {
    const bridgeGame = initBridgeGame(['U', 'D', 'D']);
    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('D');

    expect(bridgeGame.isSuccess()).toBe(true);
  });

  test('사용자가 중간에 다리를 잘못 건너면 실패다.', () => {
    const bridgeGame = initBridgeGame(['U', 'D', 'D']);
    bridgeGame.move('U');
    bridgeGame.move('U');

    expect(bridgeGame.isSuccess()).toBe(false);
  });

  test('사용자가 마지막에 다리를 잘못 건너면 실패다.', () => {
    const bridgeGame = initBridgeGame(['U', 'D', 'D']);
    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('U');

    expect(bridgeGame.isSuccess()).toBe(false);
  });

  test('다리를 반환한다.', () => {
    const bridgeGame = initBridgeGame(['U', 'D', 'D']);

    expect(bridgeGame.getBridgeDirections()).toEqual(['U', 'D', 'D']);
  });

  test('사용자의 이동들을 반환한다.', () => {
    const bridgeGame = initBridgeGame(['U', 'D', 'D']);
    bridgeGame.move('U');
    bridgeGame.move('U');

    expect(bridgeGame.getUserDirections()).toEqual(['U', 'U']);
  });

  // test('사용자의 이동 결과를 반환한다.', () => {
  //   const bridgeGame = initBridgeGame(['U', 'D', 'D']);
  //   bridgeGame.move('U');
  //   const map = bridgeGame.getMap();

  //   expect(map).toEqual([['O'], ['']]);
  // });

  // test('사용자의 이동 결과를 반환한다.', () => {
  //   const bridgeGame = initBridgeGame(['U', 'D', 'D']);
  //   bridgeGame.move('U');
  //   bridgeGame.move('U');
  //   const map = bridgeGame.getMap();

  //   expect(map).toEqual([
  //     ['O', 'X'],
  //     ['', ''],
  //   ]);
  // });

  // test('사용자의 이동 결과를 반환한다.', () => {
  //   const bridgeGame = initBridgeGame(['U', 'D', 'D']);
  //   bridgeGame.move('U');
  //   bridgeGame.move('D');
  //   const map = bridgeGame.getMap();

  //   expect(map).toEqual([
  //     ['O', ''],
  //     ['', 'O'],
  //   ]);
  // });

  // test('사용자의 이동 결과를 반환한다.', () => {
  //   const bridgeGame = initBridgeGame(['U', 'D', 'D']);
  //   bridgeGame.move('U');
  //   bridgeGame.move('D');
  //   bridgeGame.move('D');
  //   const map = bridgeGame.getMap();

  //   expect(map).toEqual([
  //     ['O', '', ''],
  //     ['', 'O', 'O'],
  //   ]);
  // });
});
