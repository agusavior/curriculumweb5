import Layout from '@/components/Layout'
import ResumeBody from '@/components/ResumeBody'
import ResumeProfileSection from '@/components/ResumeProfileSection'

const IndexPage = () => (
  <Layout title="Agustín's Resume">
    <div className="text-base font-sans with-bg-gradient sm:p-4 md:p-8">

      <div className="flex flex-row gap-4 flex-wrap sm:flex-nowrap w-full">

        <ResumeProfileSection className="section flex-initial max-w-min"/>

        <ResumeBody className="section flex-initial overflow-hidden"/>

      </div>

    </div>
  </Layout>
)

export default IndexPage
