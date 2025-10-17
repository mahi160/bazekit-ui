import { Accordion as BaseAccordion } from '@base-ui-components/react'
import style from './Accordion.module.css'

function Accordion({
  ...props
}: BaseAccordion.Root.Props) {
  return <BaseAccordion.Root className={style.accordion} {...props} />
}

function AccordionItem({
  ...props
}: BaseAccordion.Item.Props) {
  return (
    <BaseAccordion.Item
      className={style.accordionItem}
      {...props}
    />
  )
}

function AccordionTrigger({
  children,
  ...props
}: BaseAccordion.Trigger.Props) {
  return (
    <BaseAccordion.Header className={style.accordionTriggerHeader}>
      <BaseAccordion.Trigger
        className={style.accordionTrigger}
        {...props}
      >
        {children}
        <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  )
}

function AccordionPanel({
  children,
  ...props
}: BaseAccordion.Panel.Props) {
  return (
    <BaseAccordion.Panel
      className={style.accordionPanel}
      {...props}
    >
      <div className={style.accordionInner}>{children}</div>
    </BaseAccordion.Panel>
  )
}

export { Accordion, AccordionItem, AccordionPanel, AccordionTrigger }
