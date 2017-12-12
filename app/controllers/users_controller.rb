class UsersController < ApplicationController
  def index
    render json: { users: ['hoge', 'fuga']}
  end

  def new
  end

  def create
    if (params[:user][:name].present?)
      render json: { success: true }
    else
      render json: { success: false }
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
