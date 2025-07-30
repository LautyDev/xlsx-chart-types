declare module "xlsx-chart" {
  export type ChartType = 'column' | 'bar' | 'line' | 'area' | 'radar' | 'scatter' | 'pie';

  export interface ChartOptions {
    file?: string;
    templatePath?: string;
    chart: ChartType;
    titles: string[];
    fields: string[];
    data: {
      [title: string]: {
        [field: string]: number;
      };
    };
    chartTitle?: string;
    charts?: ChartOptions[];
  }

  export class XLSXChart {
    constructor();
    writeFile(opts: ChartOptions, callback: (err: Error | null) => void): void;
    generate(opts: ChartOptions, callback: (err: Error | null, data: Buffer) => void): void;
  }

  export default XLSXChart;
}
