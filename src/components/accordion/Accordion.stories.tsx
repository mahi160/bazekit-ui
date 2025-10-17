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
    <div style={{ maxWidth: 400, background: 'white', padding: 20 }}>
      <Accordion defaultValue={['item-2']} openMultiple={false}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Dunder Mifflin Info</AccordionTrigger>
          <AccordionPanel>
            <p>
              Dunder Mifflin Paper Company provides premium paper products for
              businesses that still believe in the power of a good sheet of paper.
              Founded in Scranton, Pennsylvania, it’s where professionalism meets
              mild chaos.
            </p>
            <p>
              Michael Scott calls it “the best place to work in the world,” which is
              technically true—if you ask only Michael Scott.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Office Policies</AccordionTrigger>
          <AccordionPanel>
            <p>
              HR representative Toby Flenderson enforces a strict “no fun” policy,
              according to Michael. Employees, however, still manage to host
              impromptu parties, chili spills, and fire drills (some real, some
              started by Dwight).
            </p>
            <p>
              Dress code is “business casual,” though Kevin interprets that
              liberally. Creed has not read it.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Employee Perks</AccordionTrigger>
          <AccordionPanel>
            <p>
              - Unlimited access to the world’s most awkward conference room meetings.
              - Chance encounters with bears, beets, and Battlestar Galactica.
              - Occasional motivational talks from Michael—results may vary.
            </p>
            <p>
              Fridays sometimes feature Pretzel Day. Stanley approves.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>

  ),
}
