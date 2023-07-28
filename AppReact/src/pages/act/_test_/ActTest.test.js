import { afterEach, describe, expect, jest, test } from "@jest/globals";
import {create} from 'react-test-renderer';
import ActTest from "..";
import { act, cleanup, render, within,} from "@testing-library/react-native";

describe('ActTest component',() => {
    afterEach(cleanup)
    test('update should trigger useEffect', () => {
        const effectCallback = jest.fn();
        const { update } = render(< callback={effectCallback} />);
        update(<UseEffect callback={effectCallback} />);
      
        expect(effectCallback).toHaveBeenCalledTimes(2);
    });
})