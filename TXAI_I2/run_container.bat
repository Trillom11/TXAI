SET IMAGE_NAME=txai

docker run -it --rm --name=%IMAGE_NAME% -v "%CD%:/home/jovyan/work" -p 8888:8888 -e GRANT_SUDO=yes --user root %IMAGE_NAME% start-notebook.py --NotebookApp.token=''