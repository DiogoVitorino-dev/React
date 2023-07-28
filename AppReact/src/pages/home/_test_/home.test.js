import { describe, expect, it, test } from "@jest/globals";
import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from "..";

describe('Home Component',() => {
    it('should add one when click button', () => {
        const {getByText} = render(<HomeScreen />)
        
        getByText('0')

        const btnAdd = getByText('add one')
        fireEvent.press(btnAdd)

        getByText('1')        
    })
    
    it('should subtract one when click button', () => {
        const {getByText,queryByText} = render(<HomeScreen />)
        
        getByText('0')

        const btnSub = getByText('subtract one')
        fireEvent.press(btnSub)

        getByText('-1')
        
        const oldValue = queryByText('0')

        expect(oldValue).toBeNull()
        
        const newValue = queryByText('-1')

        expect(newValue).not.toBeNull()
    })
    
    it('should sum fifty when click button', () => {
        const {getByText,queryByText} = render(<HomeScreen />)
        
        getByText('0')

        const btn = getByText(/add fifty/i)
        fireEvent.press(btn)
        fireEvent.press(btn)

        const newValue = queryByText('100')

        expect(newValue).not.toBeNull()
    })
})
