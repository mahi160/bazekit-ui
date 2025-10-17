import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: `
The **Accordion** component ...
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 400, padding: 20 }}>
      <Accordion defaultValue={['item-2']} openMultiple={false}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Jim Halpert</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: 'pretty' }}>
              Salesman, prank enthusiast, and master of side-eye. Somehow manages to
              stay sane surrounded by chaos—and Dwight.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Pam Beesly</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: 'pretty' }}>
              Receptionist turned artist with a quiet wit and endless patience.
              Believes in love, doodles, and subtle rebellion.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Dwight Schrute</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: 'pretty' }}>
              Assistant to the Regional Manager. Beet farmer. Survivalist. Believes
              in discipline, bears, and total office dominance.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>

  ),
}
