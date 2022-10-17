import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { SignIn } from "./SignIn";

export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args: {
    },
    argTypes: {
    }
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'testando@hotmail.com')
        userEvent.type(canvas.getByPlaceholderText('******'), 'testando1')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            expect(canvas.getByText('Login Realizado')).toBeInTheDocument()
        })
    }
}