import { describe, expect, it, jest, test } from "@jest/globals";
import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ButtonHome from "../ButtonHome";

describe('ButtonHome Component',() => {
    it('renders correctly', () => {
        const tree = renderer.create(<ButtonHome />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should call onPress prop on click', () => {
        const fn = jest.fn()
        render(<ButtonHome disabled={false} onPressButton={fn}>Click</ButtonHome>)
        const button = screen.getByRole('button')
        
        fireEvent.press(button)

        expect(fn).toBeCalledWith(50)
    })
})
