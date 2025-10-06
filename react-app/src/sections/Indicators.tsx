import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler)

export default function Indicators() {
  const rootStyles = getComputedStyle(document.documentElement)
  const colorPrimary = (rootStyles.getPropertyValue('--primary') || '#1ca053').trim()
  const colorSecondary = (rootStyles.getPropertyValue('--secondary') || '#a6d5bd').trim()
  const colorTertiary = (rootStyles.getPropertyValue('--tertiary') || '#e9f7ef').trim()
  const colorDark = (rootStyles.getPropertyValue('--dark') || '#145c36').trim()

  const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']

  const data = {
    labels,
    datasets: [
      {
        label: 'Labores / mes',
        data: [120, 160, 130, 180, 140, 190],
        borderColor: colorPrimary,
        backgroundColor: `${colorPrimary}33`,
        tension: 0.15,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: colorPrimary,
        pointBorderWidth: 2,
        borderWidth: 3,
      },
      {
        label: 'Horas maquinaria',
        data: [300, 360, 320, 380, 340, 420],
        borderColor: colorSecondary,
        backgroundColor: `${colorSecondary}33`,
        tension: 0.15,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: colorSecondary,
        pointBorderWidth: 2,
        borderWidth: 3,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: true as const, labels: { color: colorDark } },
      tooltip: {
        backgroundColor: colorDark,
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        padding: 12,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: colorDark },
      },
      y: {
        beginAtZero: true,
        grid: { color: colorTertiary },
        ticks: { color: colorDark },
      },
    },
  }

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: 700 }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Indicadores</p>
          <h1 className="display-5 mb-4">Indicadores clave del proyecto</h1>
          <p className="mb-4">Una vista rápida de métricas relevantes de gestión agrícola en Tool Manager.</p>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-lg-8">
            <Line data={data} options={options} height={70} />
          </div>
          <div className="col-lg-4">
            <div className="border rounded p-4 h-100">
              <h4 className="mb-3">Resumen</h4>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Lotes activos</span>
                <strong className="text-primary">24</strong>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Labores / mes</span>
                <strong className="text-primary">180</strong>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Equipos</span>
                <strong className="text-primary">56</strong>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Personal</span>
                <strong className="text-primary">85</strong>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span>Horas maquinaria</span>
                <strong className="text-primary">420</strong>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>Reportes</span>
                <strong className="text-primary">32</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


