import Layout from '@/components/Layout'
import ResumeBody from '@/components/ResumeBody'
import ResumeProfileSection from '@/components/ResumeProfileSection'

const IndexPage = () => (
  <Layout title="Agustín's Resume">
    <div className="text-base font-sans bg-gray-100 p-8">

      <div className="flex flex-row gap-4 flex-wrap sm:flex-nowrap">

        <ResumeProfileSection className="section flex-auto"/>

        <ResumeBody className="section flex-auto"/>

      </div>

    </div>
  </Layout>
)

export default IndexPage
