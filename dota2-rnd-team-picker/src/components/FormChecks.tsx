import { Form } from "react-bootstrap"
interface FormChecksProps {
  checks: CheckInfo[]
}

interface CheckInfo {
  name: string,
  checked: boolean,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  label: string
}

export const FormChecks = ({ checks }: FormChecksProps) => {


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {
          checks.map(i => {
            return (
              <Form.Check
                key={Math.random()}
                type="switch"
                id="custom-switch"
                {...i}
              />
            )
          })
        }
      </Form>
    </>
  )
}