import os
import datetime
import time

import requests
from hata import Client, Guild, InteractionEvent, GuildProfile, Attachment

GUILD = Guild.precreate(int(os.environ['RISEN_DISCORD_ID']))
risen = Client(os.environ['DISCORD_BOT_TOKEN'], extensions='slash')


def authenticate(interaction: InteractionEvent):
    try:
        if int(os.environ['DISCORD_TEAM_ROLE_ID']) in interaction.user.guild_profiles[int(os.environ['RISEN_DISCORD_ID'])].role_ids:
            return True
        else:
            return False
    except:
        return False

@risen.events
async def ready(client):
    print(f'{client:f} logged in.')

@risen.interactions(guild=GUILD, wait_for_acknowledgement=True)
async def generate_link(interaction: InteractionEvent):
    """Generate a biological age link"""
    yield 
    if authenticate(interaction):
        response = requests.post(f"{os.environ['BACKEND_URL']}/token", json={"request_token": os.environ['REQUEST_TOKEN']})

        yield response.json()['detail']
        if response.status_code == 200:
            yield f"{response.json()['link']}"
    else:
        yield "You are not authorized to use this command"
risen.start()
