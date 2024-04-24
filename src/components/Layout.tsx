import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
      <Header>Dio Bank Bruno</Header>
      { children }
      <Footer />
    </>
  )
}
