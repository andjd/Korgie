class TracksController < ApplicationController

  def index
    tracks = Track.all
    render json: tracks
  end

  def create
    tr = Track.create!(params.require(:track).permit(:title, :roll))
    render json: tr
  end

  def destroy
    tr = Track.find(params[:id])
    tr.destroy!
    render text: "Boom"

  end

end
