/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #userMoves = [];
  #bridge;

  /**
   * @constructor
   * @param {('U'|'D')[]} bridge - 다리('U' 와 'D'로 이루어진 배열)
   */
  constructor(bridge) {
    this.#bridge = bridge;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {('U'|'D')} direction - 이동 방향
   */
  move(direction) {
    this.#userMoves.push(direction);
  }

  getBridge() {
    return [...this.#bridge];
  }

  getUserMoves() {
    return [...this.#userMoves];
  }

  /**
   * 사용자가 더 이동할 수 있는지 확인하는 메서드
   * @return {boolean[]} 더 이동 할 수 있으면 true, 없으면 false를 반환
   */
  isMovable() {
    return this.#isStartWith() && this.#hasLessLength();
  }

  #isStartWith() {
    const [bridge, userMoves] = [this.#bridge, this.#userMoves];

    return (
      userMoves.filter((userDirection, index) => userDirection === bridge[index]).length ===
      userMoves.length
    );
  }

  #hasLessLength() {
    return this.#userMoves.length < this.#bridge.length;
  }

  isSuccess() {
    const [bridge, userMoves] = [this.#bridge, this.#userMoves];

    return bridge
      .map((direction, index) => direction === userMoves[index])
      .every((isSame) => isSame);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  retry() {}
}

module.exports = BridgeGame;
