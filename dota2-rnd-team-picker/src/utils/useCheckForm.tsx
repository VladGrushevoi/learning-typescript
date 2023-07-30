import { useCheck } from "../hooks/useCheck"
import { Position } from "../types/positionEnum";

export const useCheckForm = () => {
    const carry = useCheck(false, Position.Carry);
    const mid_lane = useCheck(false, Position.MidLane)
    const hard_lane = useCheck(false, Position.HardLane)
    const soft_support = useCheck(false, Position.SoftSupport)
    const hard_support = useCheck(false, Position.HardSupport)

    const setDefault = (name: string) => {
        switch(name){
            case carry.name:
                carry.setDefault();
                break;
            case mid_lane.name:
                mid_lane.setDefault();
                break;
            case hard_lane.name:
                hard_lane.setDefault();
                break;
            case soft_support.name:
                soft_support.setDefault();
                break;
            case hard_support.name:
                hard_support.setDefault();
                break;
        }
    }

    return {
      checks: [carry, mid_lane, hard_lane, soft_support, hard_support],
      setDefault
    }
}