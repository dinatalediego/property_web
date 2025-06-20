import os
from pathlib import Path
from datetime import datetime

import pandas as pd
import plotly.express as px
from supabase import create_client
import os
from dotenv import load_dotenv
from pathlib import Path
from datetime import datetime
load_dotenv()

SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_KEY = os.getenv('SUPABASE_SERVICE_ROL')
BUCKET_NAME = os.getenv('SUPABASE_BUCKET', 'plots')
TABLE_NAME = os.getenv('SUPABASE_TABLE', 'cards')


def upload_plot(client, bucket_name: str, file_path: Path) -> str:
    """Upload HTML plot to Supabase storage and return the public URL."""
    #file_name = file_path.name
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    file_name = f"{file_path.stem}-{timestamp}.html"

    with file_path.open('rb') as f:
        client.storage.from_(bucket_name).upload(file_name, f, {'content-type': 'text/html'})
    return client.storage.from_(bucket_name).get_public_url(file_name)


def process_csv(client, csv_path: Path):
    df = pd.read_csv(csv_path, encoding="latin1")
    rows, columns = df.shape
    date = datetime.now().isoformat()
    source = csv_path.name

    # Simple histogram of the first column
    fig = px.histogram(df, x=df.columns[0])
    html_path = csv_path.with_suffix('.html')
    print(f"Generating {html_path}")
    fig.write_html(str(html_path))

    url = upload_plot(client, BUCKET_NAME, html_path)

    card = {
        'rows': rows,
        'columns': columns,
        'date': date,
        'source': source,
        'plot_url': url,
    }
    client.table(TABLE_NAME).insert(card).execute()
    print(f'Inserted card for {csv_path}')


def main(root_dir: str = 'datacenter'):
    if not SUPABASE_URL or not SUPABASE_KEY:
        raise RuntimeError('SUPABASE_URL and SUPABASE_KEY must be set')

    client = create_client(SUPABASE_URL, SUPABASE_KEY)

    root = Path(root_dir)
    if not root.is_dir():
        raise FileNotFoundError(f'{root_dir} directory not found')

    for folder in root.iterdir():
        if folder.is_dir():
            for csv_file in folder.glob('*.csv'):
                process_csv(client, csv_file)


if __name__ == '__main__':
    main()
