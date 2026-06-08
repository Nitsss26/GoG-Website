import os
import re

files = [
    r"c:\Users\Nitesh\Downloads\gog\data\admissionsData.ts",
    r"c:\Users\Nitesh\Downloads\gog\data\gyanveerData.ts",
    r"c:\Users\Nitesh\Downloads\gog\data\iesData.ts",
    r"c:\Users\Nitesh\Downloads\gog\data\orientalData.ts",
    r"c:\Users\Nitesh\Downloads\gog\data\sageData.ts",
    r"c:\Users\Nitesh\Downloads\gog\data\sageIndoreData.ts",
    r"c:\Users\Nitesh\Downloads\gog\data\scopeData.ts"
]

replacement = '''export const studentVlogs = [
    { id: 1, title: "Scope Global Skills University", thumbnail: "https://i.vimeocdn.com/video/2166064082-e43219d29e335b5dc1332f0a52b4c9141c7f41f41f9c202f3d6050b517e2f7ac-d_720x1280?region=us", views: "12K", duration: "0:20", video: "https://player.vimeo.com/video/1199275131?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" },
    { id: 2, title: "SAGE University Indore", thumbnail: "https://i.vimeocdn.com/video/2166064085-ca09792621731ec35a5a662fc93b9a3b218a978fd8293e257fbdf72423ad8b67-d_720x1280?region=us", views: "22K", duration: "0:16", video: "https://player.vimeo.com/video/1199275133?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" },
    { id: 3, title: "SAGE University Bhopal", thumbnail: "https://i.vimeocdn.com/video/2166064018-a4b897beaee83a20bb5cec9cce39da2a990935c946a794f7d3a3bc3cd7afd667-d_720x1280?region=us", views: "15K", duration: "0:11", video: "https://player.vimeo.com/video/1199275132?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" },
    { id: 4, title: "Oriental University", thumbnail: "https://i.vimeocdn.com/video/2166064021-ca51b4f9b0b85baa475c421ad74c8aed7b849818f6d15732a7a58dbaf2458d3a-d_720x1280?region=us", views: "8.5K", duration: "0:25", video: "https://player.vimeo.com/video/1199275129?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" },
    { id: 5, title: "Gyanveer University", thumbnail: "https://i.vimeocdn.com/video/2166065024-a46d367ece9136c3e391da0615603adf77fd017cf79ad8a72e3ed7d5a86697bf-d_720x1280?region=us", views: "10K", duration: "0:30", video: "https://player.vimeo.com/video/1199276013?badge=0&autopause=0&player_id=0&app_id=58479" },
];'''

pattern = re.compile(r'export const studentVlogs = \[\s*\{ id: 1.*?\}[\s\S]*?\];', re.MULTILINE)

for filepath in files:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = pattern.sub(replacement, content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"File not found: {filepath}")
